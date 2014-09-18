using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using Newtonsoft.Json;
using WebApiLogService.Models;

namespace WebApiLogService.Controllers
{
    public class CalculationLogController : ApiController
    {
        private readonly string _fileLocation = HttpContext.Current.Request.MapPath("~/App_Data/logEntries.json");

        public ICollection<JsonString> Get()
        {
            var jsonString = File.ReadAllText(_fileLocation);

            var list = JsonConvert.DeserializeObject<List<JsonString>>(jsonString);

            return list ?? new List<JsonString>();
        }

        public HttpResponseMessage Post(JsonString calculationLog)
        {
            var list = Get();

            list.Add(calculationLog);

            var jsonString = JsonConvert.SerializeObject(list);

            File.WriteAllText(_fileLocation, jsonString);

            return Request.CreateResponse(HttpStatusCode.OK);
        }
    }
}
