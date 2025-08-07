using System;
using System.Collections;

var url = Environment.GetEnvironmentVariable("API_URL");      
var key = Environment.GetEnvironmentVariable("API_KEY");

IDictionary environmentVariables = Environment.GetEnvironmentVariables();

foreach (DictionaryEntry entry in environmentVariables)
{
    if (entry.Key == "API_URL" || entry.Key == "API_KEY")
    { 
        Console.WriteLine($"{entry.Key} = {entry.Value}");
    }
}

Console.WriteLine($"\nurl: {url}, key: {key}\n");
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}"
);

app.Run();
