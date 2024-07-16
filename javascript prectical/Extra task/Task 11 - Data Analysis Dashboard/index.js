const productData = JSON.parse(localStorage.getItem("product-analysis-data"));

function openFilterForm() {
    if (document.querySelector(".filter-btn").textContent.trim() == "Filter Data") {
        document
            .querySelector(".inputs")
            .setAttribute("style", "display:inline-block");
        document.querySelector(".filter-btn").textContent = "Close";
    } else if (document.querySelector(".filter-btn").textContent.trim() == "Close") {
        document.querySelector(".inputs").setAttribute("style", "display:none");
        document.querySelector(".filter-btn").textContent = "Filter Data";
    } else {
        console.log("not true");
    }
}
function dynamicChart() {
    document.querySelector(".main").setAttribute("style", "display:block");
    const ctx0 = document.querySelector("#canvas0").getContext("2d");

    let input1 = document.querySelector("#firstInput").value.trim();
    let input2 = document.querySelector("#secondInput").value;

    let ProductName0 = productData.map((value) => value[input1]);
    let ProductSales0 = productData.map((value) => value[input2]);
    console.log(ProductName0);
    console.log(ProductSales0);

    let myChart0 = new Chart(ctx0, {
        type: "bar",
        data: {
            labels: ProductName0,
            datasets: [
                {
                    label: "Filter Value",
                    data: ProductSales0,
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                        "rgba(255, 205, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(201, 203, 207, 0.2)",
                        "rgba(0,0,0,0.2)",
                    ],
                    borderColor: [
                        "rgb(255, 99, 132)",
                        "rgb(255, 159, 64)",
                        "rgb(255, 205, 86)",
                        "rgb(75, 192, 192)",
                        "rgb(54, 162, 235)",
                        "rgb(153, 102, 255)",
                        "rgb(201, 203, 207)",
                        "rgb(0,0,0)",
                    ],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            responsive: false,
        },
    });

    const ctx01 = document.querySelector("#canvas01").getContext("2d");
    let ProductName01 = productData.map((value) => value[input1]);
    let ProductSales01 = productData.map((value) => value[input2]);
    console.log(ProductName01);
    console.log(ProductSales01);

    let myChart01 = new Chart(ctx01, {
        type: "line",
        data: {
            labels: ProductName01,
            datasets: [
                {
                    label: "Filtered Value",
                    data: ProductSales01,
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                        "rgba(255, 205, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(201, 203, 207, 0.2)",
                        "rgba(0,0,0,0.2)",
                    ],
                    borderColor: ["rgb(255, 159, 64)"],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            responsive: false,
        },
    });

    const ctx02 = document.querySelector("#canvas02").getContext("2d");
    let ProductName02 = productData.map((value) => value[input1]);
    let ProductSales02 = productData.map((value) => value[input2]);
    console.log(ProductName02);
    console.log(ProductSales02);

    let myChart02 = new Chart(ctx02, {
        type: "polarArea",
        data: {
            labels: ProductName02,
            datasets: [
                {
                    label: "Filtered Value",
                    data: ProductSales02,
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                        "rgba(255, 205, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(201, 203, 207, 0.2)",
                        "rgba(0,0,0,0.2)",
                    ],
                    borderColor: [
                        "rgb(255, 99, 132)",
                        "rgb(255, 159, 64)",
                        "rgb(255, 205, 86)",
                        "rgb(75, 192, 192)",
                        "rgb(54, 162, 235)",
                        "rgb(153, 102, 255)",
                        "rgb(201, 203, 207)",
                        "rgb(0,0,0)",
                    ],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            responsive: false,
        },
    });

    const ctx03 = document.querySelector("#canvas03").getContext("2d");
    let ProductName03 = productData.map((value) => value[input1]);
    let ProductSales03 = productData.map((value) => value[input2]);
    console.log(ProductName03);
    console.log(ProductSales03);

    let myChart03 = new Chart(ctx03, {
        type: "doughnut",
        data: {
            labels: ProductName03,
            datasets: [
                {
                    label: "Filter Value",
                    data: ProductSales03,
                    backgroundColor: [
                        "rgb(255, 99, 132)",
                        "rgb(255, 159, 64)",
                        "rgb(255, 205, 86)",
                        "rgb(75, 192, 192)",
                        "rgb(54, 162, 235)",
                        "rgb(153, 102, 255)",
                        "rgb(201, 203, 207)",
                        "rgb(0,0,0,0.4)",
                    ],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            responsive: false,
        },
    });
}

const ctx = document.querySelector("#canvas").getContext("2d");
let ProductName = productData.map((value) => value.name);
let ProductSales = productData.map((value) => value.sales);

let myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ProductName,
        datasets: [
            {
                label: "Product and Sales (minimum and maximum value include)",
                data: ProductSales,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(255, 205, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(201, 203, 207, 0.2)",
                    "rgba(0,0,0,0.2)",
                ],
                borderColor: [
                    "rgb(255, 99, 132)",
                    "rgb(255, 159, 64)",
                    "rgb(255, 205, 86)",
                    "rgb(75, 192, 192)",
                    "rgb(54, 162, 235)",
                    "rgb(153, 102, 255)",
                    "rgb(201, 203, 207)",
                    "rgb(0,0,0)",
                ],
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: false,
    },
});

const ctx2 = document.querySelector("#canvas2").getContext("2d");

let ProductCategory = new Set(productData.map((value) => value.category));

const ProductSalesCategory = productData.reduce((acc, product) => {
    if (!acc[product.category]) {
        acc[product.category] = 0;
    }
    acc[product.category] += product.sales;
    return acc;
}, {});

console.log(Object.values(ProductSalesCategory));

let myChart2 = new Chart(ctx2, {
    type: "polarArea",
    data: {
        labels: Array.from(ProductCategory),
        datasets: [
            {
                label: "Category wise Sales (sum and maximum value include)",
                data: Object.values(ProductSalesCategory),
                backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(75, 192, 192)",
                    "rgb(255, 205, 86)",
                    "rgb(201, 203, 207)",
                    "rgb(54, 162, 235)",
                ],
            },
        ],
    },
    options: {
        responsive: false,
    },
});

const ctx3 = document.querySelector("#canvas3").getContext("2d");

let ProductName3 = productData.map((value) => value.name);
let remainingStock = productData.map((value) => value.stock);

let myChart3 = new Chart(ctx3, {
    type: "bar",
    data: {
        labels: ProductName3,
        datasets: [
            {
                label: "Stock Remaining",
                data: remainingStock,
                backgroundColor: "rgba(52, 227, 52, 0.2)",
                borderColor: "green",
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: false,
    },
});

const ctx4 = document.querySelector("#canvas4").getContext("2d");

let monthlySale = productData.map((value) => value.sales);
let yearlySales = productData.map((value) => value.yearlySales);
let averageSale = productData.map((value) => value.yearlySales / 12);
console.log(averageSale);

let myChart4 = new Chart(ctx4, {
    data: {
        labels: ProductName3,
        datasets: [
            {
                type: "bar",
                label: "Average Sales",
                data: averageSale,
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgb(54, 162, 235)",
                borderWidth: 1,
            },
            {
                type: "bar",
                label: "Monthly Sales",
                data: monthlySale,
                backgroundColor: "rgba(153, 102, 255, 0.2)",
                borderColor: "rgb(153, 102, 255)",
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: false,
    },
});

const ctx5 = document.querySelector("#canvas5").getContext("2d");

let monthlyData = productData.find((value) => value.monthlySale);
let monthlySaleRecord = monthlyData.monthlySale.map((value) =>
    Object.values(value)
);
console.log(monthlySaleRecord.flat(2));
let myChart5 = new Chart(ctx5, {
    type: "line",
    data: {
        labels: [
            "january",
            "february",
            "march",
            "april",
            "may",
            "june",
            "july",
            "august",
            "september",
            "october",
            "november",
            "december",
        ],
        datasets: [
            {
                label: "Monthly Sales of Smartphone X",
                data: monthlySaleRecord.flat(2),
                backgroundColor: "rgba(255, 159, 64, 0.2)",
                borderColor: "rgb(255, 159, 64)",
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: false,
    },
});

const ctx6 = document.querySelector("#canvas6").getContext("2d");

console.log(averageSale);

let myChart6 = new Chart(ctx6, {
    data: {
        labels: ProductName3,
        datasets: [
            {
                axis: "y",
                type: "bar",
                label: "Monthly Sales",
                data: monthlySale,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgb(255, 99, 132)",
                borderWidth: 1,
            },
            {
                axis: "y",
                type: "bar",
                label: "Stock",
                data: remainingStock,
                backgroundColor: "rgba(255, 159, 64, 0.2)",
                borderColor: "rgb(255, 159, 64)",
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: false,
        indexAxis: "y",
    },
});
