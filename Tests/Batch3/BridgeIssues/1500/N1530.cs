using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1530 - {0}")]
    public class Bridge1530
    {
        [ObjectLiteral]
        private class Child : Parent
        {
            public string Name { get; set; }
        }

        [ObjectLiteral]
        private interface Parent
        {
            //[FieldProperty]
            string Name { get; set; }
        }

        [Test]
        public void TestObjectLiteralPropertyImplementingInterface()
        {
            Child c = new Child { Name = "name" };
            Parent p = c;

            Assert.AreEqual("name", p.Name);
            Assert.AreEqual("name", c.Name);
        }
    }
}