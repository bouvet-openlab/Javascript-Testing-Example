using System.Linq;
using System.Net.Http.Formatting;
using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace WebApiLogService
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            var jsonFormatter = GlobalConfiguration.Configuration.Formatters.OfType<JsonMediaTypeFormatter>().First();
            jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            jsonFormatter.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
            foreach (var xmlFormatter in GlobalConfiguration.Configuration.Formatters.OfType<XmlMediaTypeFormatter>().ToList())
            {
                GlobalConfiguration.Configuration.Formatters.Remove(xmlFormatter);
            }

            GlobalConfiguration.Configure(WebApiConfig.Register);
            System.Web.Routing.RouteTable.Routes.MapPageRoute("default", "", "~/app/src/index.html");
        }
    }
}
