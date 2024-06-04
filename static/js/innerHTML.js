const str_cms_comment_tr = `
<td class="align-middle text-center">UUID</td>
<td class="align-middle text-center">NAME</td>
<td class="align-middle text-center">EMAIL</td>
<td class="align-middle text-center">ORG</td>
<td class="align-middle text-center">WEBSITE</td>
<td class="align-middle text-center">TEL</td>
<td class="align-middle text-center">COMMENT</td>
<td class="align-middle text-center">
  <button type="button" class="btn" onclick="location.href='/backend/cms_contact_us_detail.html?uuid=UUID'">
    <img src="/static/imgs/eye_unchecked.svg" style="width: 25px;" alt="">
  </button>
  <button type="button" class="btn" onclick="delComment('UUID')">
    <img src="/static/imgs/delete.svg" style="width: 25px;" alt="">
  </button>
</td>
`

const str_cms_main_news = `
<div class="col-md-12 d-none d-md-block">
<div class="my-4 rounded-0">
  <div class="img-fluid bg-cover" style="background-image:url(NEWS_COVER); width:100% ;height:500px; background-repeat: no-repeat">
    <div class="d-flex flex-column h-100 justify-content-end text-white">
      <div class="bg-dark pt-2 px-3 bg-opacity d-flex flex-cloum justify-content-between align-items-center">
        <div>
          <p class="mb-0 text-shadow">PERIOD</p>
          <p class="text-shadow">NEWS_TITLE</p>
        </div>
        <a href="/news_content.html?uuid=NEWS_UUID" class="stretched-link"></a>
      </div>
    </div>
  </div>
</div>
</div>
<div class="col-md-12 d-md-none">
<div class="mb-4 rounded-0">
  <div class="img-fluid bg-cover" style="background-image:url(NEWS_COVER); width:100% ;height:288px; background-repeat: no-repeat">
    <div class="d-flex flex-column h-100 justify-content-end text-white">
      <div class="bg-dark pt-2 px-3 bg-opacity">
          <p class="mb-0 text-shadow">PERIOD</p>
          <p class="text-shadow">NEWS_TITLE</p>
      </div>
    </div>
    <a href="/news_content.html?uuid=NEWS_UUID" class="stretched-link"></a>
    <a  href="#" class="btn btn-danger rounded-pill btn-block stretched-link mt-3" style="position: relative;">刪除</a>
  </div>
</div>
</div>
`

const str_task_del_modal = `
<div class="modal-dialog modal-dialog-centered modal-sm">
  <div class="modal-content">
    <div id="delete_uuid_UUID_TASK" class="modal-body text-center" style="font-size: 20px;">
      <p>確定刪除此項活動設計嗎？</p>
      <button type="button" class=" btn btn-secondary" style="width: 80px;" data-dismiss="modal">取消</button>
      <button type="button" class="btn btn-danger" style="width: 80px;" data-dismiss="modal" onclick="showDeleteModal('UUID_TASK')">確定</button>
    </div>
  </div>
</div>
`

const str_project_delete_modal = `
    <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
      <div class="modal-content">
        <div class="modal-body m-auto">
          <p class="mb-0" style="font-size: 20px;">確定刪除專案?</p>
        </div>
        <div class="modal-footer border-0 justify-content-center">
          <button type="button" class="btn btn-secondary mr-3" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">取消</button>
          <button type="button" class="btn btn-danger" onclick="showProjectDeleteModel('UUID_PROJECT')">刪除</button>
        </div>
      </div>
    </div>
`
const str_project_management_modal = `
<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
  <div class="modal-content">
    <div class=" mt-2 mr-2">
      <button type="button" class="close p-2" data-bs-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body pt-0">
      <div class="container my-5">
        <div class="row justify-content-center">
          <div class="col-md-10 d-none d-md-block">
            <div class="row justify-content-center">
              <div class="col-2">
                <div class="card card-button" style="height: 100px;">
                  <div class="d-flex justify-content-center align-items-center h-100">
                    <div class="text-center">
                      <img src="/static/imgs/update-project.svg" alt="" style="width:50px">
                      <p class="mt-2 mb-0">更新專案</p>
                    </div>
                  </div>
                  <a href="/backend/cms_plan_info.html?uuid=UUID_PROJECT" class="stretched-link"></a>
                </div>
              </div>
              <div class="col-2">
                <div class="card card-button" style="height: 100px;">
                  <div class="d-flex justify-content-center align-items-center h-100">
                    <div class="text-center">
                      <img src="/static/imgs/add-project.svg" alt="" style="width:50px">
                      <p class="mt-2 mb-0">新增任務</p>
                    </div>
                  </div>
                  <a href="/backend/cms_impact.html?uuid=UUID_PROJECT" class="stretched-link"></a>
                </div>
              </div>
              <div class="col-2">
                <div class="card card-button" style="height: 100px;">
                  <div class="d-flex justify-content-center align-items-center h-100">
                    <div class="text-center">
                      <img src="/static/imgs/verify-project.svg" alt="" style="width:50px">
                      <p class="mt-2 mb-0">驗證專案</p>
                    </div>
                  </div>
                  <a href="/backend/admin_project_verify.html?uuid=UUID_PROJECT&parent=1" class="stretched-link"></a>
                </div>
              </div>
              <div class="col-2">
                <div class="card card-button" style="height: 100px;">
                  <div class="d-flex justify-content-center align-items-center h-100">
                    <div class="text-center">
                      <img src="/static/imgs/hot-zone.svg" alt="" style="width:50px">
                      <p class="mt-2 mb-0">熱區圖示</p>
                    </div>
                  </div>
                  <a href="/backend/heat_map.html?uuid=UUID_PROJECT" class="stretched-link"></a>
                </div>
              </div>
              <div class="col-2">
                <div class="card card-button" style="height: 100px;">
                  <div class="d-flex justify-content-center align-items-center h-100">
                    <div class="text-center">
                      <img src="/static/imgs/del-project.svg" alt="" style="width:50px">
                      <p class="mt-2 mb-0">刪除專案</p>
                    </div>
                  </div>
                  <a href="#" class="stretched-link" data-bs-toggle="modal" data-bs-target="#projectDeleteModel_UUID_PROJECT"></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 d-md-none">
            <div class="row">
              <div class="col-6">
                <div class="card card-button" style="height: 120px;">
                  <div class="d-flex justify-content-center align-items-center h-100">
                    <div class="text-center">
                      <img src="/static/imgs/update-project.svg" alt="" style="width:50px">
                      <p class="mt-2 mb-0">更新專案</p>
                    </div>
                  </div>
                  <a href="/backend/cms_plan_info.html?uuid=UUID_PROJECT" class="stretched-link"></a>
                </div>
              </div>
              <div class="col-6">
                <div class="card card-button" style="height: 120px;">
                  <div class="d-flex justify-content-center align-items-center h-100">
                    <div class="text-center">
                      <img src="/static/imgs/add-project.svg" alt="" style="width:50px">
                      <p class="mt-2 mb-0">新增任務</p>
                    </div>
                  </div>
                  <a href="/backend/cms_impact.html?uuid=UUID_PROJECT" class="stretched-link"></a>
                </div>
              </div>
              <div class="col-6 mt-4">
                <div class="card card-button" style="height: 120px;">
                  <div class="d-flex justify-content-center align-items-center h-100">
                    <div class="text-center">
                      <img src="/static/imgs/verify-project.svg" alt="" style="width:50px">
                      <p class="mt-2 mb-0">驗證專案</p>
                    </div>
                  </div>
                  <a href="/backend/admin_project_verify.html?uuid=UUID_PROJECT&parent=1" class="stretched-link"></a>
                </div>
              </div>
              <div class="col-6 mt-4">
                <div class="card card-button" style="height: 120px;">
                  <div class="d-flex justify-content-center align-items-center h-100">
                    <div class="text-center">
                      <img src="../static/imgs/hot-zone.svg" alt="" style="width:50px">
                      <p class="mt-2 mb-0">熱區圖示</p>
                    </div>
                  </div>
                  <a href="/backend/heat_map.html?uuid=UUID_PROJECT" class="stretched-link"></a>
                </div>
              </div>
              <div class="col-6 mt-4">
                <div class="card card-button" style="height: 120px;">
                  <div class="d-flex justify-content-center align-items-center h-100">
                    <div class="text-center">
                      <img src="/static/imgs/del-project.svg" alt="" style="width:50px">
                      <p class="mt-2 mb-0">刪除專案</p>
                    </div>
                  </div>
                  <a href="#" class="stretched-link" data-bs-toggle="modal" data-bs-target="#projectDeleteModel_UUID_PROJECT"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<div id="projectDeleteModel" class="modal fade" tabindex="-1" role="dialog">
<div class="modal-dialog modal-dialog-centered modal-sm" role="document">
  <div class="modal-content">
    <div class="modal-body m-auto">
      <p class="mb-0" style="font-size: 20px;">確定刪除專案?</p>
    </div>
    <div class="modal-footer border-0 justify-content-center">
      <button type="button" class="btn btn-secondary mr-3" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">取消</button>
      <button type="button" class="btn btn-danger">刪除</button>
    </div>
  </div>
</div>
`

const str_main_news = `
<div class="mb-4 rounded-0">
  <div class="img-fluid bg-cover" style="background-image:url(NEWS_COVER); width:100% ;height:500px; background-repeat: no-repeat">
    <div class="d-flex flex-column h-100 justify-content-end text-white">
      <div class="bg-dark pt-2 pl-3 bg-opacity">
        <p class="mb-0 text-shadow">PERIOD</p>
        <p class="text-shadow">NEWS_TITLE</p>
      </div>
    </div>
    <a href="/news_content.html?uuid=NEWS_UUID" class="stretched-link"></a>
  </div>
</div>
</div>
<div class="col-md-12 d-md-none">
<div class="mb-4 rounded-0">
  <div class="img-fluid bg-cover" style="background-image:url(NEWS_COVER); width:100% ;height:288px; background-repeat: no-repeat">
    <div class="d-flex flex-column h-100 justify-content-end text-white">
      <div class="bg-dark pt-2 pl-3 bg-opacity">
        <p class="mb-0 text-shadow">PERIOD</p>
        <p class="text-shadow">NEWS_TITLE</p>
      </div>
    </div>
    <a href="/news_content.html?uuid=NEWS_UUID" class="stretched-link"></a>
  </div>
</div>
</div>
`

const str_parent_task_block = `
<div class="row py-3 mb-2 justify-content-center">
  <div class="col-10 border p-3">
    <div class="row">
      <div class="col-md-6">
        <div id="coverImg_UUID_TASK" class="border d-flex flex-column align-items-center justify-content-center" style="height:300px">
          <button type="button" id="btnUploadImg_UUID_TASK" onclick="uploadTaskCover('UUID_TASK')">
            <div id="divUploadImg_UUID_TASK" class="bg-contain" style="background-image: url(/static/imgs/image_icon.svg);width:100px; height:100px; background-repeat: no-repeat; background-size: cover;"></div>
          </button>
        </div>
      </div>
      <div class="col-md-6">
        <form>
          <div class="form-row">
            <div class="form-group col-12 mt-3 mt-md-0">
              <label for="inputEvent">活動設計名稱</label>
              <input id="parent_task_name_UUID_TASK" type="text" class="form-control" id="inputEvent" placeholder="">
            </div>
            <div class="form-group col-6">
              <label for="inputDatePicker1">開始日期</label>
              <div class="input-group date" id="datetimepicker1" data-target-input="nearest">
                <input type="text" id="parent_task_start_date_UUID_TASK" class="form-control datetimepicker-input" data-target="#datetimepicker1"/>
                <div class="input-group-append" data-target="#datetimepicker1" data-toggle="datetimepicker">
                    <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                </div>
              </div>
            </div>
            <div class="form-group col-6">
              <label for="inputDatePicker2">結束日期</label>
              <div class="input-group date" id="datetimepicker2" data-target-input="nearest">
                <input type="text" id="parent_task_due_date_UUID_TASK" class="form-control datetimepicker-input" data-target="#datetimepicker2"/>
                <div class="input-group-append" data-target="#datetimepicker2" data-toggle="datetimepicker">
                  <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="textareaIdea">理念傳達</label>
            <textarea id="parent_task_overview_UUID_TASK" class="form-control" id="textareaIdea" placeholder="" style="resize: none"></textarea>
          </div>
          <div class="form-check">
          <input type="checkbox" class="form-check-input checkbox-1x" id="gps_flag_UUID_TASK" style="position: relative; left: 2px">
          <label class="form-check-label ml-2" for="exampleCheck1">啟動GPS足跡側錄</label>
        </div>
        <div class="d-none d-md-block">
          <div class="d-flex justify-content-center justify-content-md-end mt-3">
            <button type="button" class="btn btn-danger rounded-pill mr-3" style="width: 150px" data-bs-target="#exampleModalToggle2_UUID_TASK" data-bs-toggle="modal">刪除</button>
            <button type="button" id="btn_cms_plan_add_parent_tasks" class="btn btn-success rounded-pill" style="width: 150px" name="UUID_TASK" onclick="cms_plan_add_parent_tasks('UUID_TASK')">新增</button>
          </div>
        </div>
        <div class="d-md-none">
          <div class="d-flex justify-content-center justify-content-md-end mt-3">
            <button type="button" class="btn btn-danger rounded-pill mr-3" style="width: 50%" data-bs-target="#exampleModalToggle2_UUID_TASK" data-bs-toggle="modal">刪除</button>
            <button type="button" id="btn_cms_plan_add_parent_tasks" class="btn btn-success rounded-pill" style="width: 50%" name="UUID_TASK" onclick="cms_plan_add_parent_tasks('UUID_TASK')">新增</button>
          </div>
        </div>
        <!-- <button type="button" class="btn btn-block btn-outline-secondary" data-bs-toggle="modal" href="#exampleModalToggle_UUID_TASK" id="UUID_TASK">新增/刪除</button> -->
          <!-- Modal -->
          <div class="modal fade" id="exampleModalToggle_UUID_TASK" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-body d-flex flex-column justify-content-arround" style="gap: 15px; height: 200px;">
                  <button type="button" id="btn_cms_plan_add_parent_tasks" class="btn btn-secondary m-auto"  style="width: 80%; height: 50px;" name="UUID_TASK" onclick="cms_plan_add_parent_tasks('UUID_TASK')">新增任務</button>
                  <button type="button" class="btn btn-secondary m-auto" style="width: 80%;  height: 50px;" data-bs-target="#exampleModalToggle2_UUID_TASK" data-bs-toggle="modal">刪除活動設計</button>
                </div>
              </div>
            </div>
          </div>
          <div class="modal fade" id="exampleModalToggle2_UUID_TASK" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered modal-sm">
              <div class="modal-content">
                <div class="modal-body m-auto" style="font-size: 20px;">
                  確定刪除此項活動設計嗎？
                </div>
                <div class="modal-footer justify-content-center border-0">
                  <button type="button" class="btn btn-secondary rounded-pill" style="width: 150px;" data-bs-dismiss="modal">取消</button>
                  <button type="button" class="btn btn-danger rounded-pill" style="width: 150px;" id="delete-task" data-bs-dismiss="modal" name="UUID_TASK" onclick="deleted_task('UUID_TASK')">確定</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div> `

const str_navbar = `    <nav class="navbar navbar-expand-xl navbar-light bg-navbar fz-18">
<div name="admin_dropdown" class="container-fluid">
  <a id="index_logo" class="navbar-brand d-none d-md-block my-md-1" href="/index.html">
    <img class="logo-pc" src="/static/imgs/2nd-home.svg" alt="">
  </a>
  <a id="index_logo" class="navbar-brand d-md-none" href="/index.html">
    <img class="logo-mobile" src="/static/imgs/2nd-home.svg" alt="">
  </a>
  <button class="navbar-toggler mr-md-5" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li id="index" class="nav-item">
        <a id="about_nav" class="nav-link fw-bold" href="/index.html">關於 Second Home </a>
      </li>
      <li id="kpi" class="nav-item">
        <a class="nav-link fw-bold" href="/kpi.html">永續專案</a>
      </li>
      <li id="solution" class="nav-item" style="display:none">
        <a class="nav-link fw-bold" href="/solution.html">解決方案</a>
      </li>
      <li id="news_list" class="nav-item">
        <a class="nav-link fw-bold" href="/news_list.html">最新消息</a>
      </li>
      <li id="contact_us" class="nav-item" style="display:none">
        <a class="nav-link fw-bold" href="/contact_us.html">聯絡我們</a>
      </li>
      <li id="account_status" class="nav-item d-flex align-items-center">
        <img class="align-top" src="/static/imgs/user.svg" alt=""><a class="nav-link fw-bold px-0" href="/tplanet_signin.html">登入</a><span class="nav-link px-1 align-middle" style="margin-bottom:2px">/</span><a class="nav-link fw-bold px-0" href="/tplanet_signup.html">註冊</a>
      </li>
    </ul>
  </div>
</div>
</nav>`

const str_footer = `    <footer class="bg-footer">
<div class="container-fluid">
  <div class="row justify-content-center pt-4">
    <div class="col-lg-9 d-none d-lg-block">
      <div class="h-100 d-flex align-items-center justify-content-center justify-content-lg-start mt-2 mt-lg-0 fz-18">
        <p class="mr-3 mb-0"><a id="about_fot1" href="/index.html" class="text-dark nav-link px-0 fw-bold">關於 Second Home</a></p>
        <p class="mr-3 mb-0"><a href="/kpi.html" class="text-dark nav-link px-0 fw-bold">永續專案</a></p>
        <p id="solution_fot1" style="display:none" class="mr-3 mb-0"><a href="/solution.html" class="text-dark nav-link px-0 fw-bold">解決方案</a></p>
        <p class="mr-3 mb-0"><a href="/news_list.html" class="text-dark nav-link px-0 fw-bold">最新消息</a></p>
        <p id="contact_us_fot1" style="display:none" class="mr-3 mb-0"><a href="/contact_us.html" class="text-dark nav-link px-0 fw-bold">聯絡我們</a></p>
        <p class="mr-3 mb-0"><a class="text-dark nav-link px-0 fw-bold" href="https://privacy.townway.com.tw/">隱私權條款</a></p>
      </div>
    </div>
    <div class="col-lg-3 mb-4 mb-lg-0">
      <div class="d-flex h-100 align-items-center justify-content-center justify-content-lg-end">
        <div>
          <a class="text-decoration-none" href="https://www.nantou.gov.tw/big5/index.asp" target="_blank">
            <img class="mr-1 footer_images" src="/static/imgs/townWay-icon.svg" alt="" style="width: 234px; height: 41px;">
          </a>
          <a class="text-decoration-none" href="https://www.youtube.com/@user-yy1dp1zf5u" target="_blank">
            <img class="footer_images" src="/static/imgs/youtube-icon.svg" alt="" style="height: 41px;">
          </a>
        </div>
      </div>
    </div>
    <!-- mobile -->
    <div class="d-flex flex-wrap justify-content-center d-lg-none fz-18">
      <p class="mr-3 mb-0"><a id="about_fot2" class="text-dark nav-link px-0 fw-bold" href="/index.html">關於 Second Home</a></p>
      <p class="mr-3 mb-0"><a class="text-dark nav-link px-0 fw-bold" href="/kpi.html">永續專案</a></p>
      <p id="solution_fot2" style="display:none" class="mr-3 mb-0"><a class="text-dark nav-link px-0 fw-bold" href="/solution.html">解決方案</a></p>
      <p class="mr-3 mb-0"><a class="text-dark nav-link px-0 fw-bold" href="/news_list.html">最新消息</a></p>
      <p id="contact_us_fot2" style="display:none" class="mr-3 mb-0"><a class="text-dark nav-link px-0 fw-bold" href="/contact_us.html">聯絡我們</a></p>
      <p class="mb-0"><a class="text-dark nav-link px-0 fw-bold" href="https://privacy.townway.com.tw/">隱私權條款</a></p>
    </div>
  </div>
  <div class="py-4">
    <div class="text-center">
      <p id="copyright" class="fw-bold mb-0">Copyright © 2023 SECOND HOME</p>
    </div>
  </div>
</div>
</footer>`

const str_project_block_in_project_page = `<a class="text-dark" href="/cms_project_detail.html?uuid=PROJECT_UUID" style="display: block; text-decoration:none">

    <div class="card mb-4 kpi-card" style="border-radius: 20px;">
      <div class="d-flex justify-content-center">
        <!-- <div class="img-fluid bg-cover shadow" style="background-repeat: no-repeat; background-position: center center; background-size: cover; background-image:url(PROJECT_COVER); width:100% ;height:200px; border-radius: 18px;"></div> -->
        <div class="img-fluid bg-cover shadow" style="background-repeat: no-repeat; background-position: center center; background-size: cover; background-image:url(PROJECT_COVER); width:100% ;height:200px; border-radius: 18px;"></div>
      </div>
      <div class="card-body d-flex flex-column">
        <p class="h5">PROJECT_NAME</p>
        <p class="card-text mt-4">永續企業:<span class="pl-2">PROJECT_A<span></p>
        <p class="card-text">地方團隊:<span class="pl-2">PROJECT_B<span></p>
        <p class="card-text">期間: <span class="pl-2">PROJECT_START ~ PROJECT_DUE<span></p>
        <p class="card-text">預算: <span class="pl-2">新台幣 BUDGET 元<span></p>
        <a href="/content.html?uuid=PROJECT_UUID" class="stretched-link"></a>
        <div class="row mt-3">

        <!--
          <div class="pl-2">
            <a href="#" class="stretched-link" style="position: relative; text-decoration: none;">
              <img style="width:13%" src="/static/imgs/SDGs_01.jpg" alt="">
            </a>
            <a href="#" class="pl-1 stretched-link" style="position: relative; text-decoration: none;">
              <img style="width:13%" src="/static/imgs/SDGs_04.jpg" alt="">
            </a>
            <a href="#" class="pl-1 stretched-link" style="position: relative; text-decoration: none;">
              <img style="width:13%"  src="/static/imgs/SDGs_06.jpg" alt="">
            </a>
            <a href="#" class="pl-1 stretched-link" style="position: relative; text-decoration: none;">
              <img style="width:13%"  src="/static/imgs/SDGs_09.jpg" alt="">
            </a>
            <a href="#" class="pl-1 stretched-link" style="position: relative; text-decoration: none;">
              <img style="width:13%"  src="/static/imgs/SDGs_11.jpg" alt="">
            </a>
            <a href="#" class="pl-1 stretched-link" style="position: relative; text-decoration: none;">
              <img style="width:13%"  src="/static/imgs/SDGs_13.jpg" alt="">
            </a>


          </div>
          -->
          SDGS_LIST
        </div>
      </div>
    </div>
  </a>
`

const str_SDG_in_list_project_backup = `<a href="#" class="pl-1 stretched-link" style="position: relative; text-decoration: none;">
    <img class="pb-1" style="width:13%"  src="/static/imgs/SDGs_INDEX_SDG.jpg" alt="">
  </a>`

  const str_SDG_in_list_project = `<div class="col-2 pr-0">
  <p href="#">
    <img class="w-100" src="/static/imgs/SDGs_INDEX_SDG.jpg" alt="">
  </p>
</div>`

const str_admin_dropdown = `<a class="nav-link d-md-none" href="/backend/message_list.html">
<img src="/static/imgs/notifications_icon.svg" width="35" height="35" class="d-inline-block align-middle" alt="">
</a>
<a class="nav-link d-md-none" data-toggle="dropdown" href="#" role="button" aria-expanded="false">
<img src="/static/imgs/manage_accounts_icon.svg" width="35" height="35" class="d-inline-block align-middle" alt="">
</a>
<div class="dropdown-menu dropdown-menu-center">
<a class="dropdown-item d-flex align-items-center" href="/backend/ab_cms_personal_file.html">
  <img src="/static/imgs/personal_info.svg" alt="" width="30" height="30" class="d-inline-block align-middle">
  <span class="pl-2">基本資料</span>
</a>
<a class="dropdown-item d-flex align-items-center" href="/backend/ab_my_project.html">
  <img src="/static/imgs/registration_icon.svg" alt="" width="30" height="30" class="d-inline-block align-middle">
  <span class="pl-2">我的提案</span>
</a>
<a class="dropdown-item d-flex align-items-center" href="/backend/cms_ab.html">
  <img src="/static/imgs/cooperate.svg" alt="" width="30" height="30" class="d-inline-block align-middle">
  <span class="pl-2">永續專案</span>
</a>
<!-- <a class="dropdown-item d-flex align-items-center" href="/backend/ab_cms_personal_file.html">
  <img src="/static/imgs/personal_info.svg" alt="" width="30" height="30" class="d-inline-block align-middle">
  <span class="pl-2">基本資料</span>
</a> -->
<a class="dropdown-item d-flex align-items-center" href="/backend/message_list.html">
  <img src="/static/imgs/message.svg" alt="" width="30" height="30" class="d-inline-block align-middle">
  <span class="pl-2">訊息管理</span>
</a>
<a class="dropdown-item d-flex align-items-center" href="javascript:void(0)" onclick="logout()">
  <img src="/static/imgs/logout.svg" alt="" width="30" height="30" class="d-inline-block align-middle">
  <span class="pl-2">登出</span>
</a>`;

const str_send_mail = `<p>寄件者：
<span>townintelligent@gmail.com</span>
</p>
<p>收件者：
<span>RECEIVER</span>
</p>
<p>主旨：
<span>TITLE 邀請</span>
</p>`;
