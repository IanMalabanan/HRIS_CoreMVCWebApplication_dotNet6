﻿using HRIS.Application.Common.Mappings;
using HRIS.Application.Employees.Dtos.Queries;


namespace HRIS_CoreMVC_dotNet6.Models
{
    public class UpdateEmployee : IMapFrom<GetEmployeesDto>
    {
        public string EmpID { get; set; }

        public string LastName { get; set; }

        public string FirstName { get; set; }

        public string MiddleName { get; set; }

        public string DepartmentCode { get; set; }

        public string DepartmentName { get; set; }

        public string DepartmentSectionCode { get; set; }

        public string DepartmentSectionName { get; set; }

        public DateTime DateOfBirth { get; set; }

        public string CivilStatusCode { get; set; }

        public string CivilStatusName { get; set; }
    }
}
