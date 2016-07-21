using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebShopLibrary;
using WebShopResource.Config;

namespace WebShopResource.Controllers
{
    [Produces("application/json")]
   
    public class DepartmentsController : Controller
    {
        private ApplicationDbContext _db;


        public DepartmentsController(ApplicationDbContext  db)
        {
            this._db = db;
        }

        // GET: api/Departments
        [HttpGet]
        [Route("api/Departments")]
        public IEnumerable<Department> Get()
        {
            return _db.Departments.ToArray();
        }

        // GET: api/Departments/5
        [HttpGet]
        [Route("api/Departments/{id}")]
        public Department Get(int id)
        {
            return _db.Departments.FirstOrDefault(x => x.Id == id);
        }
        
        // POST: api/Departments
        [HttpPost]
        [Route("api/Departments")]

        public IActionResult Post([FromBody]Department value)
        {
            var x = _db.Departments.Add(value);
            _db.SaveChanges();
            return base.Ok();

        }
        
        // PUT: api/Departments/5
        [HttpPut]
        [Route("api/Departments/{id}")]

        public IActionResult Put(int id, [FromBody]Department value)
        {
            _db.Entry(value).State = EntityState.Modified;
            _db.SaveChanges();
            return base.Ok();
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete]
        [Route("api/Departments/{id}")]

        public IActionResult Delete(int id)
        {
            Department y = _db.Departments.FirstOrDefault(x => x.Id == id);
            _db.Departments.Remove(y);
            _db.SaveChanges();
            return base.Ok();

        }
    }
}
