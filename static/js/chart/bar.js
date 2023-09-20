export function draw_bar(
  element_id,
  obj_project_weight,
  svg_width,
  svg_height,
  array_weight_colors,
  index_only,
  zero_draw
) {
  // Remove zero vlaue
  if (zero_draw == false) {
    Object.keys(obj_project_weight).forEach(function (key) {
      if (
        parseInt(obj_project_weight[key]) == 0 ||
        obj_project_weight[key] == "0" ||
        obj_project_weight[key] == null
      ) {
        try {
          delete obj_project_weight[key];
        } catch (e) {
          console.log(e);
        }
      }
    });
  }

  // Parse the Data
  var object_keys = Object.keys(obj_project_weight);
  var object_values = Object.values(obj_project_weight);

  if (index_only == true) {
    var object_keys_new = [];
    object_keys.forEach((element) =>
      object_keys_new.push(element.substring(5, 7))
    );
    object_keys = object_keys_new;
  }

  var object_values_new = [];
  object_values.forEach((element) => object_values_new.push(parseInt(element)));
  object_values = object_values_new;

  // Set the dimensions and margins of the graph
  const margin = { top: 10, right: 30, bottom: 90, left: 40 },
    width = svg_width - margin.left - margin.right,
    height = svg_height - margin.top - margin.bottom;

  // Append the svg object to the body of the page
  const svg = d3
    .select("#" + element_id)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // X axis
  const x = d3.scaleBand().range([0, width]).domain(object_keys).padding(0.2);
  svg
    .append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

  // Add Y axis
  const y = d3
    .scaleLinear()
    .domain([0, d3.max(object_values)]) // Data range
    .range([height, 0]); // SVG height
  svg.append("g").call(d3.axisLeft(y));

  var setp = height / d3.max(object_values);
  for (var index = 0; index < object_values.length; index++) {
    // Bars
    var bar = svg
      .selectAll("mybar")
      .data(object_values)
      .enter()
      .append("rect")
      .attr("x", function (d) {
        return x(object_keys[index]);
      })
      .attr("width", x.bandwidth())
      //.attr("fill", array_weight_colors[parseInt(object_keys[index].substring(5,7))-1])
      .attr("fill", array_weight_colors[parseInt(object_keys[index]) - 1])
      .attr("height", (d) => 0)
      .attr("y", (d) => y(0));

    // Animation
    bar
      .transition()
      .ease(d3.easeLinear)
      .duration(800)
      .attr("height", (d) => object_values[index] * setp)
      .attr("y", (d) => y(object_values[index]))
      .delay((d, i) => {
        return i * 100;
      });
  }
}

const createSdgImages = () => {
  const images = [];
  for (var index = 1; index <= 17; index++) {
    images.push({
      src: `/static/imgs/SDGs-${index}.png`,
      height: 25,
      width: 25,
    });
  }
  return images;
};

export const sdgImages = createSdgImages();

export const fiveImges = [
  {
    src: `/static/imgs/morality.png`,
    height: 25,
    width: 25,
  },
  {
    src: `/static/imgs/intelligence.png`,
    height: 25,
    width: 25,
  },
  {
    src: `/static/imgs/physique.png`,
    height: 25,
    width: 25,
  },
  {
    src: `/static/imgs/social-skills.png`,
    height: 25,
    width: 25,
  },
  {
    src: `/static/imgs/aesthetics.png`,
    height: 25,
    width: 25,
  },
];

export const commonImages = [
  {
    src: `/static/imgs/people.png`,
    height: 25,
    width: 25,
  },
  {
    src: `/static/imgs/culture.png`,
    height: 25,
    width: 25,
  },
  {
    src: `/static/imgs/place.png`,
    height: 25,
    width: 25,
  },
  {
    src: `/static/imgs/specialty.png`,
    height: 25,
    width: 25,
  },
  {
    src: `/static/imgs/landscape.png`,
    height: 25,
    width: 25,
  },
];

export const allSdgImages = [...sdgImages, ...fiveImges, ...commonImages];

export const append_chart_container = (element, canvasId) => {
  $(element).append(
    $("<div/>", { class: "chart-container" }).append(
      $("<canvas/>", { id: canvasId })
    )
  );
};

const filter_zero_item = (data, backgroundColor, images) => {
  const newData = {};
  const newBackgroundColor = [];
  const newImages = [];
  const keys = Object.keys(data);
  for (const index in keys) {
    const key = keys[index];
    if (data[key] == 0) {
      continue;
    }

    newData[key] = data[key];
    if (Array.isArray(backgroundColor)) {
      newBackgroundColor.push(backgroundColor[index]);
    }

    if (Array.isArray(images)) {
      newImages.push(images[index]);
    }
  }

  return {
    data: newData,
    backgroundColor: newBackgroundColor,
    images: newImages,
  };
};

const SDG_MAP = {
  "sdgs-18": "人",
  "sdgs-19": "文",
  "sdgs-20": "地",
  "sdgs-21": "產",
  "sdgs-22": "景",
  "sdgs-23": "德",
  "sdgs-24": "智",
  "sdgs-25": "體",
  "sdgs-26": "群",
  "sdgs-27": "美",
};

export const getMappedSdgData = (data) => {
  const keys = Object.keys(data);
  const newData = {};
  for (const key of keys) {
    const newKey = SDG_MAP[key];
    if (newKey) {
      newData[newKey] = data[key];
    } else {
      newData[key] = data[key];
    }
  }

  return newData;
};

export const draw_bar_chart = ({
  elementId,
  title,
  data,
  images = [],
  backgroundColor,
  yAxisTitle = "關係人口數",
  xAxisTitle = "指標",
  xAxisDisplay = true,
  skipZero = false,
  titlePosition = "top",
  titleFontSize = 24,
  gridlineDisplay = false,
}) => {
  let ctx = document.getElementById(elementId);

  if (skipZero) {
    const filtered = filter_zero_item(data, backgroundColor, images);
    data = filtered.data;
    backgroundColor = filtered.backgroundColor;
    images = filtered.images;
  }

  const chart = new Chart(ctx, {
    type: "bar",
    data: {
      datasets: [
        {
          label: title,
          data,
          backgroundColor,
          borderWidth: 1,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      elements: {
        bar: {
          borderWidth: 2,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: yAxisTitle,
          },
          ticks: {
            precision: 0,
          },
          grid: {
            display: gridlineDisplay,
          },
        },
        x: {
          title: {
            display: true,
            text: xAxisTitle,
          },
          display: xAxisDisplay,
          grid: {
            display: gridlineDisplay,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: title,
          font: { size: titleFontSize },
          position: titlePosition,
          padding: {
            bottom: 50
          }
        },
        labels: {
          render: "image",
          images: images,
        },
      },
    },
  });

  return chart;
};
