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
            var dropboxKey = config["Secrets:DROPBOX_KEY"];
            var dropboxSecret = config["Secrets:DROPBOX_SECRET"];
            var dropboxToken = config["Secrets:DROPBOX_TOKEN"];

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

            if (dropboxKey is null)
            {
                throw new MissingFieldException(
                    this.GenerateMissingMessage("Dropbox 'Key'", "'Secrets' field")
                );
            }

            if (dropboxSecret is null)
            {
                throw new MissingFieldException(
                    this.GenerateMissingMessage("Dropbox 'Secret'", "'Secrets' field")
                );
            }

            if (dropboxToken is null)
            {
                throw new MissingFieldException(
                    this.GenerateMissingMessage("Dropbox 'Token'", "'Secrets' field")
                );
            }

            
            this.secrets.supabase.URL = URL;
            this.secrets.supabase.Key = Key;
            this.secrets.dropbox.Key = dropboxKey;
            this.secrets.dropbox.Secret = dropboxSecret;
            this.secrets.dropbox.Token = dropboxToken;
        }

        protected string GenerateMissingMessage(string field, string category)
        {
            return $"{field} is not present in applicationsettings.json {category}.";
        }
    }
}