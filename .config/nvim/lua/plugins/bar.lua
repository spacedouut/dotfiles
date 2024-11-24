return {
    "romgrk/barbar.nvim",
    dependencies = {
        "lewis6991/gitsigns.nvim",
        "nvim-tree/nvim-web-devicons",
    },
    opts = { animation = true },
    config = function()
        vim.g.barbar_auto_setup = false
        require 'barbar'.setup {
            sidebar_filetypes = {
                -- Use the default values: {event = 'BufWinLeave', text = '', align = 'left'}
                ['neo-tree'] = {event = 'BufWipeout'},
            }
        }
    end,
}
