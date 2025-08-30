

using System.Net;

namespace backend.Environment.Response.Models
{
    public class Generic
    {
        public HttpStatusCode Status { get; set; }
        public string? Error { get; set; } = String.Empty;
    }
}