﻿var page = {
    sourceUrl: "/employee/displayall",
    tableContainer: "employee-list",
    EmpID: null,
    table: null
};

var EmployeeData = function EmployeeData() {
    this.employeeTable = null;
    this.employeeTable = function () {
        this.columns = [
            {
                "data": "empID", "display": "Employee ID",
                "autoWidth": true,
                "searchable": true
            },
            {
                "data": "lastName", "display": "Last Name",
                "autoWidth": true,
                "searchable": true
            },
            {
                "data": "firstName", "display": "First Name",
                "autoWidth": true,
                "searchable": true
            },
            {
                "data": "middleName", "display": "Middle Name",
                "autoWidth": true,
                "searchable": true
            },
            {
                "data": null, "display": "",
                "render": function (data, type, row, meta) {
                    return `<a onclick='ViewEmployee(this)' href='#'>View</a>`;
                },
                "orderable": false
            },
            {
                "data": null, "display": "",
                "render": function (data, type, row, meta) {
                    return `<a onclick='EditEmployee(this)' href='#'>Edit</a>`;
                },
                "orderable": false
            }        ];
        this.generateTable = function (url, containerId, id, addClass, order) {
            var $table = createHTMLTable(containerId, id, this.columns, addClass);
            $table = $table.DataTable({
                "sAjaxSource": url,
                "bServerSide": true,
                "bProcessing": true,
                "bSearchable": true,
                "scrollX": true,
                "scrollY": true,
                "order": [[0, 'asc']],
                "language": {
                    "emptyTable": "No record found.",
                    "processing":
                        '<i class="fa fa-spinner fa-spin fa-3x fa-fw" style="color:#2a2b2b;"></i><span class="sr-only">Loading...</span> '
                },
                "columns": this.columns
            });
            return $table;
        }
    }

}



var emp = new EmployeeData();

function GenerateList() {
    var table = new emp.employeeTable();

    page.table = table.generateTable(page.sourceUrl, page.tableContainer);

    datatable = page.table;
}

function ViewEmployee(empId) {
    $("#message").empty();
    page.EmpID = page.table.row($(empId).closest("tr")).data().empID;
    var url = '/employee/' + page.EmpID;
    window.location.href = url;
}

function EditEmployee(empId) {
    $("#message").empty();
    page.EmpID = page.table.row($(empId).closest("tr")).data().empID;
    var url = '/employee/edit/' + page.EmpID;
    window.location.href = url;
}

$(document).ready(function () {
    GenerateList();
});