using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using LearningManagement.Models;
using Microsoft.AspNetCore.Mvc;

namespace LearningManagement.Interface
{
    public interface IStudentRepository
    {
        Student AddStudent(Student student);

        Student RemoveStudent(String id);

        public Task<ActionResult<List<Student>>> GetStudents();

    }
}