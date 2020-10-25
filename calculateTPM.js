$(document).ready(function(){
    $("#calculate").click(function(){
        //range of data
        var minVal=16,maxVal=32;

        //select textbox by id
        var warmGear=parseInt($("#WarmGear").val());
        var Const=parseInt($("#Constant").val());

        //print data
        var id=1;
        $("#result").children().remove();
     console.log(warmGear,"--",Const)
        for (let i = minVal; i < maxVal; i++) {
            var row =$("<tr></tr>");
            var Key=$(`<th scope="row">${id++}</th>`);
            var Drumgear=$(`<td>${i}</td>`);
            var Warmgear=$(`<td>${warmGear}</td>`);
            var ans=i*Const/warmGear;
            var TPM=$(`<td>${ans}</td>`);
            row.html(Key);
            row.append(Drumgear);
            row.append(Warmgear);
            row.append(TPM);
            console.log(row.html());

            $("tbody#result").append(row);
        }
    });
});