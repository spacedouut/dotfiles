vim.cmd("set expandtab")
vim.cmd("set tabstop=4")
vim.cmd("set softtabstop=4")
vim.cmd("set shiftwidth=4")
vim.cmd("set clipboard=unnamedplus")
vim.cmd("set undofile")
vim.cmd("set nu")
vim.cmd("set noswapfile")
-- vim.cmd("set autochdir")
vim.g.mapleader = " "



if vim.g.neovide then
    --vim.o.guifont = "JetBrainsMono Nerd Font Regular:h11"
    vim.g.neovide_cursor_animation_length = 0.1
    vim.g.neovide_cursor_trail_size = 0.5
    vim.g.neovide_cursor_smooth_blink = true
 
    vim.cmd("se mouse+=a")

    -- Copy & Paste
    vim.cmd("noremap <C-C> \"+y")
    vim.cmd("noremap <C-V> \"+p")

    -- Undo & Redo
    vim.cmd("noremap <C-z> u")
    vim.cmd("noremap <C-y> <C-r>")

    -- Save
    vim.cmd("nnoremap <C-s> :w<CR>")
    vim.cmd("nnoremap <C-S> :wa<CR>")
    vim.cmd("nnoremap <C-S-A-S> :wqa!<CR>")


    vim.o.guifont = "JetBrainsMono Nerd Font:h14"
end
