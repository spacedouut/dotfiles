return {
    "goolord/alpha-nvim",
    dependencies = { { "nvim-tree/nvim-web-devicons" } },
    config = function()
        local alpha = require("alpha")
        local dashboard = require("alpha.themes.dashboard")

        if vim.g.neovide then
            dashboard.section.header.val = {
                [[                                                                                                        dddddddd                    ]],
                [[NNNNNNNN        NNNNNNNN                                                              iiii              d::::::d                    ]],
                [[N:::::::N       N::::::N                                                             i::::i             d::::::d                    ]],
                [[N::::::::N      N::::::N                                                              iiii              d::::::d                    ]],
                [[N:::::::::N     N::::::N                                                                                d:::::d                     ]],
                [[N::::::::::N    N::::::N    eeeeeeeeeeee       ooooooooooo vvvvvvv           vvvvvvviiiiiii     ddddddddd:::::d     eeeeeeeeeeee    ]],
                [[N:::::::::::N   N::::::N  ee::::::::::::ee   oo:::::::::::oov:::::v         v:::::v i:::::i   dd::::::::::::::d   ee::::::::::::ee  ]],
                [[N:::::::N::::N  N::::::N e::::::eeeee:::::eeo:::::::::::::::ov:::::v       v:::::v   i::::i  d::::::::::::::::d  e::::::eeeee:::::ee]],
                [[N::::::N N::::N N::::::Ne::::::e     e:::::eo:::::ooooo:::::o v:::::v     v:::::v    i::::i d:::::::ddddd:::::d e::::::e     e:::::e]],
                [[N::::::N  N::::N:::::::Ne:::::::eeeee::::::eo::::o     o::::o  v:::::v   v:::::v     i::::i d::::::d    d:::::d e:::::::eeeee::::::e]],
                [[N::::::N   N:::::::::::Ne:::::::::::::::::e o::::o     o::::o   v:::::v v:::::v      i::::i d:::::d     d:::::d e:::::::::::::::::e ]],
                [[N::::::N    N::::::::::Ne::::::eeeeeeeeeee  o::::o     o::::o    v:::::v:::::v       i::::i d:::::d     d:::::d e::::::eeeeeeeeeee  ]],
                [[N::::::N     N:::::::::Ne:::::::e           o::::o     o::::o     v:::::::::v        i::::i d:::::d     d:::::d e:::::::e           ]],
                [[N::::::N      N::::::::Ne::::::::e          o:::::ooooo:::::o      v:::::::v        i::::::id::::::ddddd::::::dde::::::::e          ]],
                [[N::::::N       N:::::::N e::::::::eeeeeeee  o:::::::::::::::o       v:::::v         i::::::i d:::::::::::::::::d e::::::::eeeeeeee  ]],
                [[N::::::N        N::::::N  ee:::::::::::::e   oo:::::::::::oo         v:::v          i::::::i  d:::::::::ddd::::d  ee:::::::::::::e  ]],
                [[NNNNNNNN         NNNNNNN    eeeeeeeeeeeeee     ooooooooooo            vvv           iiiiiiii   ddddddddd   ddddd    eeeeeeeeeeeeee  ]],
            }
        else
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

        end

        dashboard.section.buttons.val = {
            dashboard.button("1", "  > New file", ":ene <BAR> startinsert <CR>"),
            dashboard.button("2", "  > Find file", ":cd $HOME/Workspace | Telescope find_files<CR>"),
            dashboard.button("3", "  > Recent", ":Telescope oldfiles<CR>"),
            dashboard.button("4", "  > Settings", ":e $MYVIMRC | :cd %:p:h | split . | wincmd k | pwd<CR>"),
            dashboard.button("5", "  > Open File/Folder", ":Telescope opener hidden=true<CR>"),
            dashboard.button("6", "  > Quit NVIM", ":qa<CR>"),
        }

        alpha.setup(dashboard.opts)

        -- Disable folding on alpha buffer
        vim.cmd("autocmd FileType alpha setlocal nofoldenable")
    end
}
