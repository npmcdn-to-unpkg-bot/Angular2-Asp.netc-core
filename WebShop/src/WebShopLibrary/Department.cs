using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebShopLibrary
{
    public class Department
    {

        public Department()
        {
        }

        public int Id { get; set; }
        public string DepartmentName { get; set; }
        public virtual IEnumerable<ProductType> ProductTypes { get; set; }
    }
}
