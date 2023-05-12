using System.ComponentModel.DataAnnotations;

namespace Domain.Models;

public class Post
{
    [Key]
    public int PostId { get; set; }
    public string? Description { get; set; }

    public List<Worker>? Workers { get; set;}
}
