using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebShopLibrary
{
    public class ProductType
    {

        public ProductType()
        {
        }

        public int Id { get; set; }
        public string ProductName { get; set; }

        

        public virtual IEnumerable<Product> Products { get; set; }
    }
}
