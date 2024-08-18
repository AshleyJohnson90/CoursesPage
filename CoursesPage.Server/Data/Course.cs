namespace CoursesPage.Server.Data;

public partial class Course
{
    public string Id { get; set; } = null!;

    public string Subject { get; set; } = null!;

    public string Name { get; set; } = null!;

    public string? Prerequisite { get; set; }

    public string Description { get; set; } = null!;
}
