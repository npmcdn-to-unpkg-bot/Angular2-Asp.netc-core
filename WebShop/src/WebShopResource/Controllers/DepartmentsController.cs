using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebShopLibrary;
using WebShopResource.Config;

namespace WebShopResource.Controllers
{
    [Produces("application/json")]
   [EnableCors("AllowAllOrigins")]
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
        public IActionResult Get([FromQuery, Required] int page, [FromQuery, Required]int perPageItems)
        {
            var x = new DepartmentPage();

            var dep = _db.Departments.AsQueryable();
            x.TotalData = dep.Count();
            if (x.TotalData < perPageItems)
            {
                x.Departments = dep.ToList();
            }
            else
            {
                if (page == 1)
                {
                    x.Departments = dep.Take(perPageItems).ToList();
                }
                else
                {
                    int num =(page-1)*perPageItems;
                    
                    x.Departments = _db.Departments.OrderBy(y => y.DepartmentName).Skip(num).Take(perPageItems).ToList();
                }
            }



            return base.Ok(x);
        }

        // GET: api/Departments/5
        [HttpGet]
        [Route("api/Departments/{id}")]
        public IActionResult Get(int id)
        {
           
                return base.Ok(_db.Departments.FirstOrDefault(x => x.Id == id));
           
           
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
