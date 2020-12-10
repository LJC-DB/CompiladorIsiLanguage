# Generated from isiLanguage.g4 by ANTLR 4.9
from antlr4 import *
if __name__ is not None and "." in __name__:
    from .isiLanguageParser import isiLanguageParser
else:
    from isiLanguageParser import isiLanguageParser

# This class defines a complete listener for a parse tree produced by isiLanguageParser.
class isiLanguageListener(ParseTreeListener):

    # Enter a parse tree produced by isiLanguageParser#prog.
    def enterProg(self, ctx:isiLanguageParser.ProgContext):
        pass

    # Exit a parse tree produced by isiLanguageParser#prog.
    def exitProg(self, ctx:isiLanguageParser.ProgContext):
        pass


    # Enter a parse tree produced by isiLanguageParser#decl.
    def enterDecl(self, ctx:isiLanguageParser.DeclContext):
        pass

    # Exit a parse tree produced by isiLanguageParser#decl.
    def exitDecl(self, ctx:isiLanguageParser.DeclContext):
        pass


    # Enter a parse tree produced by isiLanguageParser#declaraID.
    def enterDeclaraID(self, ctx:isiLanguageParser.DeclaraIDContext):
        pass

    # Exit a parse tree produced by isiLanguageParser#declaraID.
    def exitDeclaraID(self, ctx:isiLanguageParser.DeclaraIDContext):
        pass


    # Enter a parse tree produced by isiLanguageParser#tipo.
    def enterTipo(self, ctx:isiLanguageParser.TipoContext):
        pass

    # Exit a parse tree produced by isiLanguageParser#tipo.
    def exitTipo(self, ctx:isiLanguageParser.TipoContext):
        pass


    # Enter a parse tree produced by isiLanguageParser#bloco.
    def enterBloco(self, ctx:isiLanguageParser.BlocoContext):
        pass

    # Exit a parse tree produced by isiLanguageParser#bloco.
    def exitBloco(self, ctx:isiLanguageParser.BlocoContext):
        pass


    # Enter a parse tree produced by isiLanguageParser#cmd.
    def enterCmd(self, ctx:isiLanguageParser.CmdContext):
        pass

    # Exit a parse tree produced by isiLanguageParser#cmd.
    def exitCmd(self, ctx:isiLanguageParser.CmdContext):
        pass


    # Enter a parse tree produced by isiLanguageParser#cmdleitura.
    def enterCmdleitura(self, ctx:isiLanguageParser.CmdleituraContext):
        pass

    # Exit a parse tree produced by isiLanguageParser#cmdleitura.
    def exitCmdleitura(self, ctx:isiLanguageParser.CmdleituraContext):
        pass


    # Enter a parse tree produced by isiLanguageParser#cmdescrita.
    def enterCmdescrita(self, ctx:isiLanguageParser.CmdescritaContext):
        pass

    # Exit a parse tree produced by isiLanguageParser#cmdescrita.
    def exitCmdescrita(self, ctx:isiLanguageParser.CmdescritaContext):
        pass


    # Enter a parse tree produced by isiLanguageParser#cmdattrib.
    def enterCmdattrib(self, ctx:isiLanguageParser.CmdattribContext):
        pass

    # Exit a parse tree produced by isiLanguageParser#cmdattrib.
    def exitCmdattrib(self, ctx:isiLanguageParser.CmdattribContext):
        pass


    # Enter a parse tree produced by isiLanguageParser#cmdcondicional.
    def enterCmdcondicional(self, ctx:isiLanguageParser.CmdcondicionalContext):
        pass

    # Exit a parse tree produced by isiLanguageParser#cmdcondicional.
    def exitCmdcondicional(self, ctx:isiLanguageParser.CmdcondicionalContext):
        pass


    # Enter a parse tree produced by isiLanguageParser#expr.
    def enterExpr(self, ctx:isiLanguageParser.ExprContext):
        pass

    # Exit a parse tree produced by isiLanguageParser#expr.
    def exitExpr(self, ctx:isiLanguageParser.ExprContext):
        pass


    # Enter a parse tree produced by isiLanguageParser#termo.
    def enterTermo(self, ctx:isiLanguageParser.TermoContext):
        pass

    # Exit a parse tree produced by isiLanguageParser#termo.
    def exitTermo(self, ctx:isiLanguageParser.TermoContext):
        pass



del isiLanguageParser