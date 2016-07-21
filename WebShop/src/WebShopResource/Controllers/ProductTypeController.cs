using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebShopLibrary;
using WebShopResource.Config;

namespace WebShopResource.Controllers
{
    public class ProductTypeController :Controller
    {
        private ApplicationDbContext _db;

        public ProductTypeController(ApplicationDbContext db)
        {
            this._db = db;
        }

        // GET: api/ProductTypes
        [HttpGet]
        public IEnumerable<ProductType> Get()
        {
            return _db.ProductTypes.ToArray();
        }

        // GET: api/ProductTypes/5
        [HttpGet("{id}", Name = "Get")]
        public ProductType Get(int id)
        {
            return _db.ProductTypes.FirstOrDefault(x => x.Id == id);
        }

        // POST: api/ProductTypes
        [HttpPost]
        public IActionResult Post([FromBody]ProductType value)
        {
            var x = _db.ProductTypes.Add(value);
            _db.SaveChanges();
            return base.Ok();

        }

        // PUT: api/ProductTypes/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]ProductType value)
        {
            _db.Entry(value).State = EntityState.Modified;
            _db.SaveChanges();
            return base.Ok();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            ProductType y = _db.ProductTypes.FirstOrDefault(x => x.Id == id);
            _db.ProductTypes.Remove(y);
            _db.SaveChanges();
            return base.Ok();

        }
    }
}

