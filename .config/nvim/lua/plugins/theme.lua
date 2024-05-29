--[[ return {
    "dyla naraps/wal.vim",
    name = "wal",
    priority = 1000,
    config = function()
        vim.cmd.colorscheme = "wal"
    end
} --]]

return {
	"folke/tokyonight.nvim",
	lazy = false,
	priority = 1000,
	opts = {},
	config = function()
		vim.cmd("colorscheme tokyonight")
	end,
}
