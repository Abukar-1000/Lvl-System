using Microsoft.Extensions.Configuration;
using System.IO;
using backend.Environment.Component.Models;

namespace backend.Environment.Main.Models
{
    public class Environment
    {
        public Secrets secrets { get; set; } = new Secrets();

        public Environment()
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .Build();

            var URL = config["Secrets:SUPABASE_URL"];
            var Key = config["Secrets:SUPABASE_KEY"];

            if (URL is null)
            {
                throw new MissingFieldException(
                    this.GenerateMissingMessage("Supabase 'URL'", "'Secrets' field")
                );
            }

            if (Key is null)
            {
                throw new MissingFieldException(
                    this.GenerateMissingMessage("Supabase 'Key'", "'Secrets' field")
                );
            }

            
            this.secrets.supabase.URL = URL;
            this.secrets.supabase.Key = Key;
        }

        protected string GenerateMissingMessage(string field, string category)
        {
            return $"{field} is not present in applicationsettings.json {category}.";
        }
    }
}