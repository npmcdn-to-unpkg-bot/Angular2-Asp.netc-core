using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebShopLibrary
{
    public class DepartmentPage
    {

        public int Page { get; set; }
        public int PerPageItems { get; set; }

        public int TotalData { get; set; }

        public IEnumerable<Department> Departments { get; set; }
    }
}
