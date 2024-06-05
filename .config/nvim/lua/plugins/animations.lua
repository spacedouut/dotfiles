return {
    'echasnovski/mini.animate',
    dependencies = {
        { 'echasnovski/mini.nvim', version = false },
    },
    config = function()
        local animate = require("mini.animate")
        animate.setup({
            cursor = {
                enable = true,
                timing = animate.gen_timing.linear({duration = 100, unit = "total"})
            }
        })
    end 
}
