using Bridge;

namespace System
{
    /// <summary>
    /// Provides an object representation of a uniform resource identifier (URI) and easy access to the parts of the URI.
    /// </summary>
    [External]
    [Reflectable]
    public class Uri
    {
        public extern Uri(string uriString);

        [Template("new System.Uri.$ctor1({baseUri}, {relativeUri})")]
        public extern Uri(Uri baseUri, string relativeUri);

        [Template("encodeURIComponent({str})")]
        public extern static string EscapeDataString(string str);

        public extern string AbsoluteUri
        {
            [Template("getAbsoluteUri()")]
            get;
        }
    }
}