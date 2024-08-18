using CoursesPage.Server.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CoursesPage.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TableController : ControllerBase
    {
        private readonly CoursesDatabaseContext _context;
        public TableController(CoursesDatabaseContext context)
        {
            _context = context;
        }

        [HttpGet]

        public async Task<IActionResult> GetAll()
        {
            var allCourses = await _context.Courses.ToListAsync();

            return Ok(allCourses);
        }

        [HttpGet("{subject}")]

        public async Task<IActionResult> GetBySubject([FromRoute] string subject)
        {
            var course = await _context.Courses.Where(c => c.Subject == subject).ToListAsync();
            return Ok(course);
        }
    }
    
}