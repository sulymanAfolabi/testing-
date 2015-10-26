namespace MvcWeb.Migrations
{
    using MvcWeb.Models;
using System;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<MvcWeb.Models.EmployeeContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "MvcWeb.Models.EmployeeContext";
        }

        protected override void Seed(MvcWeb.Models.EmployeeContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
/*
            protected override void seed(EmployeeContext context){
                var r = new Random();
                var items = Enumerable.Range(1,50).Select)(o =>new Employee){
                   Id = (byte)r.Next(10),
                }
 * */

           // Id= for (int i = 0; i < 100; i++){

            }
        }
    }

