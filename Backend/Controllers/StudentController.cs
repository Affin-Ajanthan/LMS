using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using LearningManagement.Interface;
using LearningManagement.Repository;
using LearningManagement.Models;
using Microsoft.AspNetCore.Mvc;

namespace LearningManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : Controller
    {
        private readonly IStudentRepository _student;
        
        public StudentController(IStudentRepository student)
        {
            _student = student;
        }
        // GET: api/Student
        [HttpGet]
        public async Task<ActionResult<List<Student>>> List()
        {
            return await _student.GetStudents();
        }
        
        [HttpPost]
        public  ActionResult<Student> Create(Student student)
        {
            return  _student.AddStudent(student);
        }
        
        
        [HttpDelete("{id}")]
        public ActionResult<Student> Delete(string id)
        {
            return  _student.RemoveStudent(id);
        }

    }
}