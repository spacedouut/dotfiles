return {
    "nvim-tree/nvim-tree.lua",
    dependencies = {
        "nvim-lua/plenary.nvim",
        "nvim-tree/nvim-web-devicons",
        "MunifTanjim/nui.nvim",
        "3rd/image.nvim",
    },
    config = function()
        require("nvim-tree").setup({
            sort = {
                sorter = "case_sensitive",
            },
            view = {
                width = 40,
            },
            renderer = {
                group_empty = true,
            },
            filters = {
                dotfiles = false,
            },
        })
        vim.keymap.set('n', '<C-n>', ':NvimTreeToggle<CR>')
    end,
}
