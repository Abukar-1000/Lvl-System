using backend.Database.Table.Models;
using Supabase;
using BackendEnvironmentSpace = backend.Environment.Main.Models;


var env = new BackendEnvironmentSpace.Environment();
var supabaseOptions = new SupabaseOptions
{
    AutoRefreshToken = true,
    AutoConnectRealtime = true,
    SessionHandler = new DefaultSupabaseSessionHandler()
};

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers().AddNewtonsoftJson();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "_ReactCors", policy =>
    {
        policy
        .WithOrigins("http://localhost:3000" )
        .AllowAnyHeader()
        .AllowAnyMethod()
        .AllowCredentials();
    });
});

builder.Services.AddSingleton(
    provider => new Supabase.Client(
        env.secrets.supabase.URL,
        env.secrets.supabase.Key,
        supabaseOptions
    )
);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("_ReactCors");
app.UseRouting();
app.MapControllers();
app.UseHttpsRedirection();

app.Run();
