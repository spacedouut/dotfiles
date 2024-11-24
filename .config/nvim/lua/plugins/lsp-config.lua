return {
    {
        "williamboman/mason.nvim",
        config = function()
            require("mason").setup()
        end,
    },
    {
        "williamboman/mason-lspconfig.nvim",
        config = function()
            require("mason-lspconfig").setup({
                ensure_installed = { "lua_ls", "clangd", "ts_ls", "html", "cssls", "jsonls", "marksman" },
            })
        end,
    },
    {
        "neovim/nvim-lspconfig",
        config = function()
            local capabilities = require("cmp_nvim_lsp").default_capabilities()
            local lspconfig = require("lspconfig")
            lspconfig.lua_ls.setup({ capabilities = capabilities })
            lspconfig.ts_ls.setup({ capabilities = capabilities })
            lspconfig.clangd.setup({ capabilities = capabilities })
            lspconfig.html.setup({ capabilities = capabilities })
            lspconfig.cssls.setup({ capabilities = capabilities })
            lspconfig.jsonls.setup({ capabilities = capabilities })

            vim.keymap.set("n", "T", vim.lsp.buf.hover, {})
            vim.keymap.set("n", "Y", vim.lsp.buf.definition, {})
            vim.keymap.set({ "n", "v" }, "<leader>ca", function()
            end, { noremap = true, silent = true })
        end,
    }
}
