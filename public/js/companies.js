$(document).ready(function(){
    var ticker = $("#ticker").text();
    var name = $("#companyName").text();
    console.log(ticker);
    var baseURL ="https://financialmodelingprep.com/api/v3/";
    // Helper function to add the td on the table.
    function addTd(item,row){
        $(row).append("<td>"+item+"</td>");
    }
    // AJAX call to get income statement data
    $.ajax({
        url: baseURL + "financials/income-statement/" + ticker,
        method: "GET"
    }).then(function(response){
        console.log(response);
        for (var i = 4; i >= 0; i--){
            var financials = response.financials[i];
            var revenue = financials.Revenue;
            var year = financials["date"].slice(0,4);
            var revenueGrowth = financials["Revenue Growth"];
            var costOfRevenue = financials["Cost of Revenue"];
            var grossProfit = financials["Gross Profit"];
            var operatingExpenses = financials["Operating Expenses"];
            var operatingIncome = financials["Operating Income"];
            var grossMargin = financials["Gross Margin"];
            var interestExpense = financials["Interest Expense"];
            var incomeTaxExpense = financials["Income Tax Expense"];
            var earningsBeforeTax = financials["Earnings before Tax"];
            var netIncome = financials["Net Income"];
            var profitMargin = financials["Profit Margin"];
            var EBITDA = financials["EBITDA"];
            var EBITDAMargin = financials["EBITDA Margin"];

            addTd(revenue,".table_revenue");
            addTd(revenueGrowth,".table_revenueGrowth");
            addTd(costOfRevenue,".table_COGS");
            addTd(grossProfit,".table_GP");
            addTd(operatingExpenses,".table_opEx");
            addTd(operatingIncome,".table_opInc");
            addTd(grossMargin,".table_grossMargin");
            addTd(interestExpense,".table_intEx");
            addTd(earningsBeforeTax,".table_EBT");
            addTd(incomeTaxExpense,".table_ITE");
            addTd(netIncome,".table_NI");
            addTd(profitMargin,".table_PM");
            addTd(EBITDA,".table_EBITDA");
            addTd(EBITDAMargin,".table_EBITDAM");
        }


    });

    var apiKey = "f3a8b323323744b19301a95301e5ab60";
    var newsURL = "https://newsapi.org/v2/everything?q="+ name + "&from=2019-11-11&to=2019-11-11&sortBy=popularity&apiKey="
    $.ajax({
        url: newsURL+apiKey,
        method: "GET"
    }).then(function(response){
        console.log("title: "+response.articles[0].title);
        console.log("source: "+response.articles[0].source.name);
        console.log("summary: "+response.articles[0].description);
        console.log("Date: "+response.articles[0].publishedAt);
        $(".news_title").append(response.articles[0].title);
        $(".news_title").css("font-weight","bold");
        $(".news_date").append(response.articles[0].publishedAt);
        $(".news_source").append(response.articles[0].source.name);
        $(".news_summary").append(response.articles[0].description);
    })

})
