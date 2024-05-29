return {
    "goolord/alpha-nvim",
    dependencies = { { "nvim-tree/nvim-web-devicons" } },
    config = function()
        local alpha = require("alpha")
        local dashboard = require("alpha.themes.dashboard")

        dashboard.section.header.val = {
            [[NNNNNNNN        NNNNNNNN                                                                iiii                          ]],
            [[N:::::::N       N::::::N                                                               i::::i                         ]],
            [[N::::::::N      N::::::N                                                                iiii                          ]],
            [[N:::::::::N     N::::::N                                                                                              ]],
            [[N::::::::::N    N::::::N    eeeeeeeeeeee       ooooooooooo   vvvvvvv           vvvvvvviiiiiii    mmmmmmm    mmmmmmm   ]],
            [[N:::::::::::N   N::::::N  ee::::::::::::ee   oo:::::::::::oo  v:::::v         v:::::v i:::::i  mm:::::::m  m:::::::mm ]],
            [[N:::::::N::::N  N::::::N e::::::eeeee:::::eeo:::::::::::::::o  v:::::v       v:::::v   i::::i m::::::::::mm::::::::::m]],
            [[N::::::N N::::N N::::::Ne::::::e     e:::::eo:::::ooooo:::::o   v:::::v     v:::::v    i::::i m::::::::::::::::::::::m]],
            [[::::::N  N::::N:::::::Ne:::::::eeeee::::::eo::::o     o::::o    v:::::v   v:::::v     i::::i m:::::mmm::::::mmm:::::m ]],
            [[N::::::N   N:::::::::::Ne:::::::::::::::::e o::::o     o::::o     v:::::v v:::::v      i::::i m::::m   m::::m   m::::m]],
            [[N::::::N    N::::::::::Ne::::::eeeeeeeeeee  o::::o     o::::o      v:::::v:::::v       i::::i m::::m   m::::m   m::::m]],
            [[N::::::N     N:::::::::Ne:::::::e           o::::o     o::::o       v:::::::::v        i::::i m::::m   m::::m   m::::m]],
            [[N::::::N      N::::::::Ne::::::::e          o:::::ooooo:::::o        v:::::::v        i::::::im::::m   m::::m   m::::m]],
            [[N::::::N       N:::::::N e::::::::eeeeeeee  o:::::::::::::::o         v:::::v         i::::::im::::m   m::::m   m::::m]],
            [[N::::::N        N::::::N  ee:::::::::::::e   oo:::::::::::oo           v:::v          i::::::im::::m   m::::m   m::::m]],
            [[NNNNNNNN         NNNNNNN    eeeeeeeeeeeeee     ooooooooooo              vvv           iiiiiiiimmmmmm   mmmmmm   mmmmmm]],
        }

        dashboard.section.buttons.val = {
            dashboard.button("1", "  > New file", ":ene <BAR> startinsert <CR>"),
            dashboard.button("2", "  > Find file", ":cd $HOME/Workspace | Telescope find_files<CR>"),
            dashboard.button("3", "  > Recent", ":Telescope oldfiles<CR>"),
            dashboard.button("4", "  > Settings", ":e $MYVIMRC | :cd %:p:h | split . | wincmd k | pwd<CR>"),
            dashboard.button("5", "  > Quit NVIM", ":qa<CR>"),
        }

        alpha.setup(dashboard.opts)

        -- Disable folding on alpha buffer
        vim.cmd("autocmd FileType alpha setlocal nofoldenable")
    end
}
