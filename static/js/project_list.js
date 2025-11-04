import { list_plans, plan_info } from "./plan.js";

export function set_page_info_project_list(page = 1, page_size = 9, filterYear = null) {
  const yearFilterSelect = document.getElementById("year_filter");
  const projectContainer = document.getElementById("project_container");

  // === 1️⃣ KPI 區塊控制 ===
  const kpiSection = document.getElementById("kpi_summary");
  const relationSection = document.getElementById("relation_chart");
  if (page === 1) {
    if (kpiSection) kpiSection.style.display = "block";
    if (relationSection) relationSection.style.display = "block";
  } else {
    if (kpiSection) kpiSection.style.display = "none";
    if (relationSection) relationSection.style.display = "none";
  }

  // === 2️⃣ 年份下拉選單（初始化） ===
  if (yearFilterSelect.options.length === 0) {
    const optAll = document.createElement("option");
    optAll.value = "all";
    optAll.textContent = "全部";
    yearFilterSelect.appendChild(optAll);
  }

  // === 3️⃣ 取得所有專案（整合所有 SITE_HOSTERS） ===
  let list_project_uuids = [];
  let list_years = [];

  // 若 localStorage 無資料，先全抓一次快取
  if (!localStorage.getItem("all_projects")) {
    let all_projects = [];
    for (let i = 0; i < SITE_HOSTERS.length; i++) {
      try {
        const obj = list_plans(SITE_HOSTERS[i], null, 1, 9999); // 抓全部
        if (!obj.projects) continue;
        all_projects = all_projects.concat(obj.projects);
      } catch (e) {
        console.log(e);
      }
    }
    localStorage.setItem("all_projects", JSON.stringify(all_projects));
  }

  // 從 localStorage 取出
  list_project_uuids = JSON.parse(localStorage.getItem("all_projects")) || [];

  // 去重
  list_project_uuids = Array.from(new Set(list_project_uuids));

  // === 4️⃣ 依年份初始化下拉選單 ===
  if (yearFilterSelect.options.length === 1) {
    list_project_uuids.forEach((uuid) => {
      const info = plan_info(uuid);
      if (info && info.period) {
        const year = extractStartYear(info.period);
        if (!isNaN(year)) list_years.push(year);
      }
    });
    list_years = Array.from(new Set(list_years)).sort();
    list_years.forEach((year) => {
      const opt = document.createElement("option");
      opt.value = year;
      opt.textContent = year;
      yearFilterSelect.appendChild(opt);
    });
  }

  // === 5️⃣ 年份篩選 ===
  if (filterYear) {
    list_project_uuids = filterProjectsByYear(parseInt(filterYear), list_project_uuids);
  }

  // === 6️⃣ 分頁設定 ===
  const effectivePageSize = (page === 1) ? 3 : page_size;
  const totalPages = Math.ceil(list_project_uuids.length / effectivePageSize) || 1;
  const startIndex = (page - 1) * effectivePageSize;
  const endIndex = startIndex + effectivePageSize;
  const paginatedProjects = list_project_uuids.slice(startIndex, endIndex);

  // === 7️⃣ 渲染卡片 ===
  projectContainer.innerHTML = "";
  paginatedProjects.forEach((uuid) => {
    const obj = plan_info(uuid);
    const html = generateProjectBlockHTML(obj);
    const block = document.createElement("div");
    block.className = "col-md-4";
    block.innerHTML = html;
    projectContainer.appendChild(block);
  });

  // === 8️⃣ 分頁控制 ===
  renderPaginationControls();

  function renderPaginationControls() {
    const old = document.querySelector(".pagination-controls");
    if (old) old.remove();

    const div = document.createElement("div");
    div.className = "pagination-controls text-center mt-3";

    const prev = document.createElement("button");
    prev.textContent = "← 上一頁";
    prev.className = "btn btn-outline-primary mx-2";
    prev.disabled = page <= 1;
    prev.onclick = () => set_page_info_project_list(page - 1, page_size, filterYear);

    const next = document.createElement("button");
    next.textContent = "下一頁 →";
    next.className = "btn btn-outline-primary mx-2";
    next.disabled = page >= totalPages;
    next.onclick = () => set_page_info_project_list(page + 1, page_size, filterYear);

    const info = document.createElement("span");
    info.textContent = `第 ${page} 頁，共 ${totalPages} 頁`;

    div.append(prev, info, next);
    projectContainer.after(div);
  }

  // === 9️⃣ 綁定年份選單 ===
  yearFilterSelect.onchange = function () {
    const val = this.value;
    if (val === "all") {
      set_page_info_project_list(1, page_size, null);
    } else {
      set_page_info_project_list(1, page_size, val);
    }
  };
}

// ===== Helper Functions =====
function extractStartYear(period) {
  if (!period) return NaN;
  const match = period.match(/(\d{4})/);
  return match ? parseInt(match[1], 10) : NaN;
}

function filterProjectsByYear(selectedYear, uuids) {
  return uuids.filter((uuid) => {
    const info = plan_info(uuid);
    if (!info || !info.period) return false;
    const year = extractStartYear(info.period);
    return year === selectedYear;
  });
}

function generateProjectBlockHTML(obj_project) {
  let html = `<a class="text-dark" href="/cms_project_detail.html?uuid=${obj_project.uuid}" style="display: block; text-decoration:none">
    <div class="card mb-4 kpi-card" style="border-radius: 20px;">
      <div class="d-flex justify-content-center">
        <div class="img-fluid bg-cover shadow"
             style="background-repeat:no-repeat;background-position:center center;background-size:cover;
             background-image:url(${obj_project.img ? HOST_URL_TPLANET_DAEMON + obj_project.img : "#"});
             width:100%;height:200px;border-radius:18px;"></div>
      </div>
      <div class="card-body d-flex flex-column">
        <p class="h5">${obj_project.name}</p>
        <p class="card-text mt-4">永續企業:<span class="pl-2">${obj_project.project_a}</span></p>
        <p class="card-text">地方團隊:<span class="pl-2">${obj_project.project_b}</span></p>
        <p class="card-text">期間:<span class="pl-2">${obj_project.period}</span></p>
        <p class="card-text">預算:<span class="pl-2">新台幣 ${obj_project.budget} 元</span></p>
        <div class="row mt-3">${generateSDGsHTML(obj_project.weight)}</div>
      </div>
    </div>
  </a>`;
  return html;
}

function generateSDGsHTML(weight) {
  if (!weight) return "";
  const list_weight = weight.split(",");
  let sdg = "";
  for (let i = 0; i < list_weight.length; i++) {
    if (parseInt(list_weight[i]) === 1) {
      const index_sdg = ("0" + (i + 1)).slice(-2);
      sdg += `<div class="col-2 p-2" style="width:13%">
                <img class="w-100" src="/static/imgs/SDGs_${index_sdg}.jpg" alt="">
              </div>`;
    }
  }
  return sdg;
}