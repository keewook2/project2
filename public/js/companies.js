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


        $(".companyName").text(name);
    })

    // // AJAX call to get balance sheet statement data
    // $.ajax({
    //     url: baseURL + "financials/balance-sheet-statement/" + ticker,
    //     method: "GET"
    // }).then(function(response){
    //     console.log(response);
    // })

    // // AJAX call to get company key metrics data
    // $.ajax({
    //     url: baseURL + "company-key-metrics/" + ticker,
    //     method: "GET"
    // }).then(function(response){
    //     console.log(response);
    // })
})
