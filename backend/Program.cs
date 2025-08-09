using System;
using System.Collections;
using Supabase;
using BackendEnvironmentSpace = backend.Environment.Main.Models;


var env = new BackendEnvironmentSpace.Environment();
var supabaseOptions = new SupabaseOptions
{
    AutoRefreshToken = true,
    AutoConnectRealtime = true
};


Console.WriteLine($"\nurl: {env.secrets.supabase.URL}, key: {env.secrets.supabase.Key}\n");

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddSingleton(
    provider => new Supabase.Client(
        env.secrets.supabase.URL,
        env.secrets.supabase.Key,
        supabaseOptions
    )
);
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
