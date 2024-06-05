return {
    'willthbill/opener.nvim',
    dependencies = {
        'nvim-telescope/telescope.nvim'
    },
    config = function()
        require("telescope").load_extension("opener")
        vim.keymap.set('n', '<C-o>', ':Telescope opener hidden=true<CR>')
    end
    
}
