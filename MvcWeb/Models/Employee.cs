using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcWeb.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string Name  { get; set; }
        public string Department { get; set; }
        public string Status { get; set; }
        public double Salary { get; set; }
    }
}