using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    [Cast("{this}.ntype === 45 || {this}.ntype === 81")]
    public sealed class TypeBinaryExpression : Expression
    {
        [Name(true)] //[Field]
        public extern Expression Expression { get; private set; }

        [Name(true)] //[Field]
        public extern Type TypeOperand { get; private set; }

        internal extern TypeBinaryExpression();
    }
}