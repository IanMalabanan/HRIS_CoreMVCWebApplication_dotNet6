﻿using HRIS.Application.Common.Mappings;
using HRIS.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HRIS.Application.CivilStatuses.Dtos;
using HRIS.Application.DepartmentalSections.Dtos.Queries;
using HRIS.Application.Departments.Dtos.Queries;
using HRIS.Application.Employees.Dtos.Queries;

namespace HRISBlazorServerApp.Dtos.Employee
{
    public class UpdateEmployeeDto 
    {
        public string EmpID { get; set; }

        public string LastName { get; set; }

        public string FirstName { get; set; }

        public string MiddleName { get; set; }

        public string DepartmentCode { get; set; }

        public string DepartmentSectionCode { get; set; }

        public DateTime DateOfBirth { get; set; }

        public string CivilStatusCode { get; set; }
    }
}