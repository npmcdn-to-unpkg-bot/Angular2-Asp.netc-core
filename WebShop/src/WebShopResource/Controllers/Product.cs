using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebShopResource.Config;
using WebShopLibrary;

namespace WebShopResource.Controllers
{
    public class ProductsController:Controller
    {
        private ApplicationDbContext _db;

        public ProductsController(ApplicationDbContext db)
        {
            this._db = db;
        }

        // GET: api/Products
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return _db.Products.ToArray();
        }

        // GET: api/Products/5
        [HttpGet("{id}", Name = "Get")]
        public Product Get(int id)
        {
            return _db.Products.FirstOrDefault(x => x.Id == id);
        }

        // POST: api/Products
        [HttpPost]
        public IActionResult Post([FromBody]Product value)
        {
            var x = _db.Products.Add(value);
            _db.SaveChanges();
            return base.Ok();

        }

        // PUT: api/Products/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Product value)
        {
            _db.Entry(value).State = EntityState.Modified;
            _db.SaveChanges();
            return base.Ok();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Product y = _db.Products.FirstOrDefault(x => x.Id == id);
            _db.Products.Remove(y);
            _db.SaveChanges();
            return base.Ok();

        }
    }
}

