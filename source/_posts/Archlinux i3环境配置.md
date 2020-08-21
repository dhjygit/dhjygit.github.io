---
title: Archlinux i3wm环境配置
date: 2020-06-23
update:
tags:
  - config file
categories:
  - config
highlight_shrink: true
description: Archlinux下的i3wm配置文件代码
---



# Archlinux i3环境配置

## i3wm

> **path: ~/.config/i3/config**

```
set $mod Mod1
font pango:monospace 15
bindsym $mod+Shift+a move scratchpad
bindsym $mod+a scratchpad show floating toggle

bindsym ctrl+Mod1+k workspace prev
bindsym ctrl+Mod1+j workspace next

#########################################################################################

exec_always picom -b
exec_always --no-startup-id fcitx
exec_always --no-startup-id feh --bg-scale "/home/luis/.config/i3/background.jpg"
exec_always --no-startup-id ~/.config/polybar/launch.sh
exec_always --no-startup-id exec qv2ray
exec_always sleep 2; exec /home/luis/.exchange_map.sh
exec_always --no-startup-id exec xset r rate 200 30
exec_always --no-startup-id exec xinput disable 17
exec_always --no-startup-id exec bash /home/luis/.exchange_xrandr.sh
#########################################################################################
exec --no-startup-id xss-lock --transfer-sleep-lock -- i3lock --nofork
exec --no-startup-id nm-applet
exec --no-startup-id xset s 0
exec --no-startup-id xset dpms 6000 8000 9000

# Use pactl to adjust volume in PulseAudio.
set $refresh_i3status killall -SIGUSR1 i3status
bindsym XF86AudioRaiseVolume exec --no-startup-id pactl set-sink-volume @DEFAULT_SINK@ +10% && $refresh_i3status
bindsym XF86AudioLowerVolume exec --no-startup-id pactl set-sink-volume @DEFAULT_SINK@ -10% && $refresh_i3status
bindsym XF86AudioMute exec --no-startup-id pactl set-sink-mute @DEFAULT_SINK@ toggle && $refresh_i3status
bindsym XF86AudioMicMute exec --no-startup-id pactl set-source-mute @DEFAULT_SOURCE@ toggle && $refresh_i3status

#########################################################################################

bindsym $mod+shift+f exec bash /home/luis/.switch_picom.sh
bindsym $mod+shift+i exec /home/luis/software/PicGo-2.3.0-beta.0.AppImage

# == rofi == #
bindsym $mod+d exec rofi -show drun
bindsym $mod+r exec angrysearch

#screenshot#
bindsym $mod+t exec deepin-screenshot

#brave#
bindsym $mod+i exec --no-startup-id brave www.baidu.com
bindsym $mod+o exec --no-startup-id brave
bindsym $mod+p exec --no-startup-id firefox

#netease-cloud-music#
#bindsym $mod+m exec netease-cloud-music &>/dev/null &
bindsym $mod+m exec spotify &>/dev/null &

floating_modifier $mod
bindsym $mod+Return exec alacritty
bindsym $mod+Shift+q kill

#audio#
bindsym $mod+e exec pactl set-sink-volume 0 +5%
bindsym $mod+w exec pactl set-sink-volume 0 -5%
bindsym $mod+s exec playerctl play-pause
bindsym $mod+shift+n exec playerctl next
bindsym $mod+shift+m exec playerctl previous
#########################################################################################

bindsym $mod+h focus left
bindsym $mod+j focus down
bindsym $mod+k focus up
bindsym $mod+l focus right

bindsym $mod+Left focus left
bindsym $mod+Down focus down
bindsym $mod+Up focus up
bindsym $mod+Right focus right

bindsym $mod+Shift+h move left
bindsym $mod+Shift+j move down
bindsym $mod+Shift+k move up
bindsym $mod+Shift+l move right

bindsym $mod+Shift+Left move left
bindsym $mod+Shift+Down move down
bindsym $mod+Shift+Up move up
bindsym $mod+Shift+Right move right

#bindsym $mod+ctrl+v split h
#bindsym $mod+ctrl+h split v

#########################################################################################

bindsym $mod+f fullscreen toggle

#bindsym $mod+s layout stacking
#bindsym $mod+w layout tabbed
#bindsym $mod+e layout toggle split

bindsym $mod+Shift+space floating toggle
bindsym $mod+space focus mode_toggle

#########################################################################################

bindsym $mod+v focus parent
bindsym $mod+c focus child

#########################################################################################

#for_window [class="窗口"] floating enable resize set 640 480,move right 330px,move down 70px

for_window [class="angrysearch"] floating enable resize set 800 600

########################################################################################

set $WS1 ""
set $WS2 ""
set $WS3 "3"
set $WS4 "4"
set $WS5 "5"
set $WS6 "6"
set $WS7 "7"
set $WS8 "8"
set $WS9 "9"

bindsym $mod+1 workspace $WS1
bindsym $mod+2 workspace $WS2
bindsym $mod+3 workspace $WS3
bindsym $mod+4 workspace $WS4
bindsym $mod+5 workspace $WS5
bindsym $mod+6 workspace $WS6
bindsym $mod+7 workspace $WS7
bindsym $mod+8 workspace $WS8
bindsym $mod+9 workspace $WS9

bindsym ctrl+Mod1+1 move container to workspace $WS1
bindsym ctrl+Mod1+2 move container to workspace $WS2
bindsym ctrl+Mod1+3 move container to workspace $WS3
bindsym ctrl+Mod1+4 move container to workspace $WS4
bindsym ctrl+Mod1+5 move container to workspace $WS5
bindsym ctrl+Mod1+6 move container to workspace $WS6
bindsym ctrl+Mod1+7 move container to workspace $WS7
bindsym ctrl+Mod1+8 move container to workspace $WS8
bindsym ctrl+Mod1+9 move container to workspace $WS9

#set $ws1 "1"
#set $ws2 "2"
#set $ws3 "3"
#set $ws4 "4"
#set $ws5 "5"
#set $ws6 "6"
#set $ws7 "7"
#set $ws8 "8"
#set $ws9 "9"
#set $ws10 "10"

#bindsym $mod+1 workspace number $ws1
#bindsym $mod+2 workspace number $ws2
#bindsym $mod+3 workspace number $ws3
#bindsym $mod+4 workspace number $ws4
#bindsym $mod+5 workspace number $ws5
#bindsym $mod+6 workspace number $ws6
#bindsym $mod+7 workspace number $ws7
#bindsym $mod+8 workspace number $ws8
#bindsym $mod+9 workspace number $ws9
#bindsym $mod+0 workspace number $ws10

#bindsym $mod+Shift+1 move container to workspace number $ws1
#bindsym $mod+Shift+2 move container to workspace number $ws2
#bindsym $mod+Shift+3 move container to workspace number $ws3
#bindsym $mod+Shift+4 move container to workspace number $ws4
#bindsym $mod+Shift+5 move container to workspace number $ws5
#bindsym $mod+Shift+6 move container to workspace number $ws6
#bindsym $mod+Shift+7 move container to workspace number $ws7
#bindsym $mod+Shift+8 move container to workspace number $ws8
#bindsym $mod+Shift+9 move container to workspace number $ws9
#bindsym $mod+Shift+0 move container to workspace number $ws10

#assign [class="(?i)netease-cloud-music"] ""
#########################################################################################

bindsym $mod+Shift+c reload
bindsym $mod+Shift+r restart
bindsym $mod+Shift+e exec "i3-nagbar -t warning -m 'You pressed the exit shortcut. Do you really want to exit i3? This will end your X session.' -B 'Yes, exit i3' 'i3-msg exit'"

#########################################################################################
mode "resize" {
        bindsym h resize shrink width 5 px or 5 ppt
        bindsym j resize grow height 5 px or 5 ppt
        bindsym k resize shrink height 5 px or 5 ppt
        bindsym l resize grow width 5 px or 5 ppt

        bindsym Left resize shrink width 5 px or 5 ppt
        bindsym Down resize grow height 5 px or 5 ppt
        bindsym Up resize shrink height 5 px or 5 ppt
        bindsym Right resize grow width 5 px or 5 ppt

        bindsym Return mode "default"
        bindsym Escape mode "default"
}
bindsym $mod+z mode "resize"

##########################################################################################

set $mode_system sleep(S) logout(O) reboot(R) shutdown(U) exit(Esc)
bindsym $mod+q mode "$mode_system"
mode "$mode_system" {
    bindsym shift+s exec --no-startup-id systemctl suspend, mode "default"
    bindsym shift+o exec --no-startup-id i3-msg exit, mode "default"
    bindsym shift+r exec --no-startup-id systemctl reboot, mode "default"
    bindsym shift+u exec --no-startup-id systemctl poweroff, mode "default"
    bindsym Escape mode "default"
}

##########################################################################################

## 窗口颜色                边框    背景    文字    提示
#client.focused          #333333 #333333 #FFFFFF #333333
#client.focused_inactive #999999 #999999 #FFFFFF #3399FF
#client.unfocused        #999999 #999999 #FFFFFF #3399FF
#client.urgent           #990000 #990000 #FFFFFF #990000
#client.placeholder      #000000 #000000 #FFFFFF #000000
#client.background       #FFFFFF
#
##i3bar设置
#bar {
#    i3bar_command i3bar -t
#    height 38
##   font pango:wqy-microhei 15
##   font pango:awesome 15
##   tray_output none
##   status_command /home/xiao/.config/i3/jconky
#    status_command i3blocks
#    position bottom
#    #mode hide
#    strip_workspace_numbers yes
##   ∥
#    separator_symbol "    "
#
#    colors {
#        background #101010c6
#        statusline #FFFFFF
#        separator  #3399FF
#        # 工作区颜色         边框    背景    文字
#        focused_workspace  #3297FD #11111100 #FFFFFF
#        active_workspace   #FFFFFF #FFFFFF00 #FFFFFF
#        inactive_workspace #111111 #111111c6 #FFFFFF
#        urgent_workspace   #990000 #111111c6 #FFFFFF
#        binding_mode       #3297FD #111111c6 #FFFFFF
##       binding_mode       #990000 #990000c6 #FFFFFF
#    }
#}



##########################################################################################

#new_window 1pixel
#new_float 1pixel
#smart_borders on

for_window [class="^.*"] border pixel 0
gaps inner 1
gaps outer 0
set $mode_gaps Gaps: (o) outer, (i) inner
set $mode_gaps_outer Outer Gaps: +|-|0 (local), Shift + +|-|0 (global)
set $mode_gaps_inner Inner Gaps: +|-|0 (local), Shift + +|-|0 (global)
bindsym $mod+Shift+g mode "$mode_gaps"

mode "$mode_gaps" {
        bindsym o      mode "$mode_gaps_outer"
        bindsym i      mode "$mode_gaps_inner"
        bindsym Return mode "default"
        bindsym Escape mode "default"
}

mode "$mode_gaps_inner" {
        bindsym plus  gaps inner current plus 5
        bindsym minus gaps inner current minus 5
        bindsym 0     gaps inner current set 0

        bindsym Shift+plus  gaps inner all plus 5
        bindsym Shift+minus gaps inner all minus 5
        bindsym Shift+0     gaps inner all set 0

        bindsym Return mode "default"
        bindsym Escape mode "default"
}
mode "$mode_gaps_outer" {
        bindsym plus  gaps outer current plus 5
        bindsym minus gaps outer current minus 5
        bindsym 0     gaps outer current set 0

        bindsym Shift+plus  gaps outer all plus 5
        bindsym Shift+minus gaps outer all minus 5
        bindsym Shift+0     gaps outer all set 0

        bindsym Return mode "default"
        bindsym Escape mode "default"
}
```

## alacritty

> **path: ~/.config/alacritty/alacritty.yml**

```
window:
  dimensions:
    columns: 0
    lines: 0
  padding:
    x: 10
    y: 10

  dynamic_padding: false

  #full
  decorations: none

  #   - Windowed
  #   - Maximized
  #   - Fullscreen
  startup_mode: Maximized

scrolling:
  history: 10000
  #multiplier: 3
  #faux_multiplier: 3
  #auto_scroll: false

  #tabspaces: 4

font:
  normal:
    family: SourceCodePro
    style: Bold
  bold:
    family: SourceCodePro
    style: Bold
  italic:
    family: SourceCodePro
    style: Bold
  size: 18.0
  offset:
    x: 0
    y: 0
  glyph_offset:
    x: 0
    y: 0
  use_thin_strokes: true

draw_bold_text_with_bright_colors: true

colors:
  primary:
    background: '0x1e2127'
    foreground: '0xabb2bf'

  normal:
    black:   '0x1e2127'
    red:     '0xe06c75'
    green:   '0x98c379'
    yellow:  '0xd19a66'
    blue:    '0x61afef'
    magenta: '0xc678dd'
    cyan:    '0x56b6c2'
    white:   '0xabb2bf'

  bright:
    black:   '0x5c6370'
    red:     '0xe06c75'
    green:   '0x98c379'
    yellow:  '0xd19a66'
    blue:    '0x61afef'
    magenta: '0xc678dd'
    cyan:    '0x56b6c2'
    white:   '0xffffff'

  indexed_colors: []

visual_bell:
  animation: EaseOutExpo
  duration: 0
  color: '0xffffff'

background_opacity: 0.75

mouse_bindings:
  - { mouse: Right, action: PasteSelection }

mouse:
  double_click: { threshold: 300 }
  triple_click: { threshold: 300 }
  hide_when_typing: false
  url:
    modifiers: None

selection:
  semantic_escape_chars: ",│`|:\"' ()[]{}<>"
  save_to_clipboard: true

dynamic_title: true

cursor:
  style: Block
  unfocused_hollow: true

live_config_reload: true

shell:
  program: /usr/bin/fish

working_directory: None

enable_experimental_conpty_backend: false

alt_send_esc: true

debug:
  render_timer: false
  persistent_logging: false
  log_level: Warn
  print_events: false
  ref_test: false

key_bindings:
  - { key: Paste,                   action: Paste                            }
  - { key: Copy,                    action: Copy                             }
  - { key: L,        mods: Control, action: ClearLogNotice                   }
  - { key: L,        mods: Control, chars: "\x0c"                            }
  - { key: Home,     mods: Alt,     chars: "\x1b[1;3H"                       }
  - { key: H,        mods: Control|Shift,        chars: "\x1bOH",        mode: AppCursor  }
  - { key: H,        mods: Control|Shift,        chars: "\x1b[H",        mode: ~AppCursor }
  - { key: End,      mods: Alt,     chars: "\x1b[1;3F"                       }
  - { key: L,        mods: Control|Shift,        chars: "\x1bOF",        mode: AppCursor  }
  - { key: L,        mods: Control|Shift,        chars: "\x1b[F",        mode: ~AppCursor }
  - { key: K,        mods: Control|Shift,        action: ScrollPageUp,   mode: ~Alt       }
  - { key: PageUp,   mods: Shift,   chars: "\x1b[5;2~",     mode: Alt        }
  - { key: PageUp,   mods: Control, chars: "\x1b[5;5~"                       }
  - { key: PageUp,   mods: Alt,     chars: "\x1b[5;3~"                       }
  - { key: PageUp,                  chars: "\x1b[5~"                         }
  - { key: J,        mods: Control|Shift,        action: ScrollPageDown, mode: ~Alt       }
  - { key: PageDown, mods: Shift,   chars: "\x1b[6;2~",     mode: Alt        }
  - { key: PageDown, mods: Control, chars: "\x1b[6;5~"                       }
  - { key: PageDown, mods: Alt,     chars: "\x1b[6;3~"                       }
  - { key: PageDown,                chars: "\x1b[6~"                         }
  - { key: Tab,      mods: Shift,   chars: "\x1b[Z"                          }
  - { key: Back,                    chars: "\x7f"                            }
  - { key: Back,     mods: Alt,     chars: "\x1b\x7f"                        }
  - { key: Insert,                  chars: "\x1b[2~"                         }
  - { key: Delete,                  chars: "\x1b[3~"                         }
  - { key: Left,     mods: Shift,   chars: "\x1b[1;2D"                       }
  - { key: Left,     mods: Control, chars: "\x1b[1;5D"                       }
  - { key: Left,     mods: Alt,     chars: "\x1b[1;3D"                       }
  - { key: H,        mods: Control, chars: "\x1b[D",        mode: ~AppCursor }
  - { key: H,        mods: Control, chars: "\x1bOD",        mode: AppCursor  }
  - { key: Right,    mods: Shift,   chars: "\x1b[1;2C"                       }
  - { key: Right,    mods: Control, chars: "\x1b[1;5C"                       }
  - { key: Right,    mods: Alt,     chars: "\x1b[1;3C"                       }
  - { key: L,        mods: Control, chars: "\x1b[C",        mode: ~AppCursor }
  - { key: L,        mods: Control, chars: "\x1bOC",        mode: AppCursor  }
  - { key: Up,       mods: Shift,   chars: "\x1b[1;2A"                       }
  - { key: Up,       mods: Control, chars: "\x1b[1;5A"                       }
  - { key: Up,       mods: Alt,     chars: "\x1b[1;3A"                       }
  - { key: K,        mods: Control, chars: "\x1b[A",        mode: ~AppCursor }
  - { key: K,        mods: Control, chars: "\x1bOA",        mode: AppCursor  }
  - { key: Down,     mods: Shift,   chars: "\x1b[1;2B"                       }
  - { key: Down,     mods: Control, chars: "\x1b[1;5B"                       }
  - { key: Down,     mods: Alt,     chars: "\x1b[1;3B"                       }
  - { key: J,        mods: Control, chars: "\x1b[B",        mode: ~AppCursor }
  - { key: J,        mods: Control, chars: "\x1bOB",        mode: AppCursor  }
  - { key: F1,                      chars: "\x1bOP"                          }
  - { key: F2,                      chars: "\x1bOQ"                          }
  - { key: F3,                      chars: "\x1bOR"                          }
  - { key: F4,                      chars: "\x1bOS"                          }
  - { key: F5,                      chars: "\x1b[15~"                        }
  - { key: F6,                      chars: "\x1b[17~"                        }
  - { key: F7,                      chars: "\x1b[18~"                        }
  - { key: F8,                      chars: "\x1b[19~"                        }
  - { key: F9,                      chars: "\x1b[20~"                        }
  - { key: F10,                     chars: "\x1b[21~"                        }
  - { key: F11,                     chars: "\x1b[23~"                        }
  - { key: F12,                     chars: "\x1b[24~"                        }
  - { key: F1,       mods: Shift,   chars: "\x1b[1;2P"                       }
  - { key: F2,       mods: Shift,   chars: "\x1b[1;2Q"                       }
  - { key: F3,       mods: Shift,   chars: "\x1b[1;2R"                       }
  - { key: F4,       mods: Shift,   chars: "\x1b[1;2S"                       }
  - { key: F5,       mods: Shift,   chars: "\x1b[15;2~"                      }
  - { key: F6,       mods: Shift,   chars: "\x1b[17;2~"                      }
  - { key: F7,       mods: Shift,   chars: "\x1b[18;2~"                      }
  - { key: F8,       mods: Shift,   chars: "\x1b[19;2~"                      }
  - { key: F9,       mods: Shift,   chars: "\x1b[20;2~"                      }
  - { key: F10,      mods: Shift,   chars: "\x1b[21;2~"                      }
  - { key: F11,      mods: Shift,   chars: "\x1b[23;2~"                      }
  - { key: F12,      mods: Shift,   chars: "\x1b[24;2~"                      }
  - { key: F1,       mods: Control, chars: "\x1b[1;5P"                       }
  - { key: F2,       mods: Control, chars: "\x1b[1;5Q"                       }
  - { key: F3,       mods: Control, chars: "\x1b[1;5R"                       }
  - { key: F4,       mods: Control, chars: "\x1b[1;5S"                       }
  - { key: F5,       mods: Control, chars: "\x1b[15;5~"                      }
  - { key: F6,       mods: Control, chars: "\x1b[17;5~"                      }
  - { key: F7,       mods: Control, chars: "\x1b[18;5~"                      }
  - { key: F8,       mods: Control, chars: "\x1b[19;5~"                      }
  - { key: F9,       mods: Control, chars: "\x1b[20;5~"                      }
  - { key: F10,      mods: Control, chars: "\x1b[21;5~"                      }
  - { key: F11,      mods: Control, chars: "\x1b[23;5~"                      }
  - { key: F12,      mods: Control, chars: "\x1b[24;5~"                      }
  - { key: F1,       mods: Alt,     chars: "\x1b[1;6P"                       }
  - { key: F2,       mods: Alt,     chars: "\x1b[1;6Q"                       }
  - { key: F3,       mods: Alt,     chars: "\x1b[1;6R"                       }
  - { key: F4,       mods: Alt,     chars: "\x1b[1;6S"                       }
  - { key: F5,       mods: Alt,     chars: "\x1b[15;6~"                      }
  - { key: F6,       mods: Alt,     chars: "\x1b[17;6~"                      }
  - { key: F7,       mods: Alt,     chars: "\x1b[18;6~"                      }
  - { key: F8,       mods: Alt,     chars: "\x1b[19;6~"                      }
  - { key: F9,       mods: Alt,     chars: "\x1b[20;6~"                      }
  - { key: F10,      mods: Alt,     chars: "\x1b[21;6~"                      }
  - { key: F11,      mods: Alt,     chars: "\x1b[23;6~"                      }
  - { key: F12,      mods: Alt,     chars: "\x1b[24;6~"                      }
  - { key: F1,       mods: Super,   chars: "\x1b[1;3P"                       }
  - { key: F2,       mods: Super,   chars: "\x1b[1;3Q"                       }
  - { key: F3,       mods: Super,   chars: "\x1b[1;3R"                       }
  - { key: F4,       mods: Super,   chars: "\x1b[1;3S"                       }
  - { key: F5,       mods: Super,   chars: "\x1b[15;3~"                      }
  - { key: F6,       mods: Super,   chars: "\x1b[17;3~"                      }
  - { key: F7,       mods: Super,   chars: "\x1b[18;3~"                      }
  - { key: F8,       mods: Super,   chars: "\x1b[19;3~"                      }
  - { key: F9,       mods: Super,   chars: "\x1b[20;3~"                      }
  - { key: F10,      mods: Super,   chars: "\x1b[21;3~"                      }
  - { key: F11,      mods: Super,   chars: "\x1b[23;3~"                      }
  - { key: F12,      mods: Super,   chars: "\x1b[24;3~"                      }
  - { key: NumpadEnter,             chars: "\n"                              }
```

## rofi

> **path: ~/.config/rofi/rofi.rasi**

```
configuration {
	modi: "combi,drun,run,window";
/*	width: 50;*/
/*	lines: 15;*/
/*	columns: 1;*/
	font: "SourceCodePro 18";
/*	bw: 1;*/
/*	location: 0;*/
/*	padding: 5;*/
/*	yoffset: 0;*/
/*	xoffset: 0;*/
/*	fixed-num-lines: true;*/
	show-icons: true;
/*	terminal: "rofi-sensible-terminal";*/
/*	ssh-client: "ssh";*/
/*	ssh-command: "{terminal} -e {ssh-client} {host} [-p {port}]";*/
/*	run-command: "{cmd}";*/
/*	run-list-command: "";*/
/*	run-shell-command: "{terminal} -e {cmd}";*/
/*	window-command: "wmctrl -i -R {window}";*/
/*	window-match-fields: "all";*/
	icon-theme: "hicolor";
/*	drun-match-fields: "name,generic,exec,categories";*/
/*	drun-show-actions: false;*/
/*	drun-display-format: "{name} [<span weight='light' size='small'><i>({generic})</i></span>]";*/
/*	disable-history: false;*/
/*	ignored-prefixes: "";*/
/*	sort: false;*/
/*	sorting-method: ;*/
/*	case-sensitive: false;*/
/*	cycle: true;*/
/*	sidebar-mode: false;*/
/*	eh: 1;*/
/*	auto-select: false;*/
/*	parse-hosts: false;*/
/*	parse-known-hosts: true;*/
/*	combi-modi: "window,run";*/
/*	matching: "normal";*/
/*	tokenize: true;*/
/*	m: "-5";*/
/*	line-margin: 2;*/
/*	line-padding: 1;*/
/*	filter: ;*/
/*	separator-style: "dash";*/
/*	hide-scrollbar: false;*/
/*	fullscreen: false;*/
/*	fake-transparency: false;*/
/*	dpi: -1;*/
/*	threads: 0;*/
/*	scrollbar-width: 8;*/
/*	scroll-method: 0;*/
/*	fake-background: "screenshot";*/
/*	window-format: "{w}    {c}   {t}";*/
/*	click-to-exit: true;*/
/*	show-match: true;*/
/*	theme: ;*/
/*	color-normal: ;*/
/*	color-urgent: ;*/
/*	color-active: ;*/
/*	color-window: ;*/
/*	max-history-size: 25;*/
/*	combi-hide-mode-prefix: false;*/
/*	matching-negate-char: '-' /* unsupported */;*/
/*	cache-dir: ;*/
/*	pid: "/run/user/1000/rofi.pid";*/
/*	display-window: ;*/
/*	display-windowcd: ;*/
/*	display-run: ;*/
/*	display-ssh: ;*/
/*	display-drun: ;*/
/*	display-combi: ;*/
/*	display-keys: ;*/
/*	kb-primary-paste: "Control+V,Shift+Insert";*/
/*	kb-secondary-paste: "Control+v,Insert";*/
/*	kb-clear-line: "Control+w";*/
/*	kb-move-front: "Control+a";*/
/*	kb-move-end: "Control+e";*/
/*	kb-move-word-back: "Alt+b,Control+Left";*/
/*	kb-move-word-forward: "Alt+f,Control+Right";*/
/*	kb-move-char-back: "Left,Control+b";*/
/*	kb-move-char-forward: "Right,Control+f";*/
/*	kb-remove-word-back: "Control+Alt+h,Control+BackSpace";*/
/*	kb-remove-word-forward: "Control+Alt+d";*/
/*	kb-remove-char-forward: "Delete,Control+d";*/
/*	kb-remove-char-back: "BackSpace,Shift+BackSpace,Control+h";*/
	kb-remove-to-eol: "Alt+k";
	kb-remove-to-sol: "Alt+u";
	kb-accept-entry: "Control+m,Return,KP_Enter";
/*	kb-accept-custom: "Control+Return";*/
/*	kb-accept-alt: "Shift+Return";*/
/*	kb-delete-entry: "Shift+Delete";*/
/*	kb-mode-next: "Shift+Right,Control+Tab";*/
/*	kb-mode-previous: "Shift+Left,Control+ISO_Left_Tab";*/
/*	kb-row-left: "Control+Page_Up";*/
/*	kb-row-right: "Control+Page_Down";*/
	kb-row-up: "Control+k,Control+p,ISO_Left_Tab";
	kb-row-down: "Control+j,Control+n";
/*	kb-row-tab: "Tab";*/
/*	kb-page-prev: "Page_Up";*/
/*	kb-page-next: "Page_Down";*/
/*	kb-row-first: "Home,KP_Home";*/
/*	kb-row-last: "End,KP_End";*/
/*	kb-row-select: "Control+space";*/
/*	kb-screenshot: "Alt+S";*/
/*	kb-ellipsize: "Alt+period";*/
/*	kb-toggle-case-sensitivity: "grave,dead_grave";*/
/*	kb-toggle-sort: "Alt+grave";*/
/*	kb-cancel: "Escape,Control+g,Control+bracketleft";*/
/*	kb-custom-1: "Alt+1";*/
/*	kb-custom-2: "Alt+2";*/
/*	kb-custom-3: "Alt+3";*/
/*	kb-custom-4: "Alt+4";*/
/*	kb-custom-5: "Alt+5";*/
/*	kb-custom-6: "Alt+6";*/
/*	kb-custom-7: "Alt+7";*/
/*	kb-custom-8: "Alt+8";*/
/*	kb-custom-9: "Alt+9";*/
/*	kb-custom-10: "Alt+0";*/
/*	kb-custom-11: "Alt+exclam";*/
/*	kb-custom-12: "Alt+at";*/
/*	kb-custom-13: "Alt+numbersign";*/
/*	kb-custom-14: "Alt+dollar";*/
/*	kb-custom-15: "Alt+percent";*/
/*	kb-custom-16: "Alt+dead_circumflex";*/
/*	kb-custom-17: "Alt+ampersand";*/
/*	kb-custom-18: "Alt+asterisk";*/
/*	kb-custom-19: "Alt+parenleft";*/
/*	kb-select-1: "Super+1";*/
/*	kb-select-2: "Super+2";*/
/*	kb-select-3: "Super+3";*/
/*	kb-select-4: "Super4";*/
/*	kb-select-5: "Super+5";*/
/*	kb-select-6: "Super+6";*/
/*	kb-select-7: "Super+7";*/
/*	kb-select-8: "Super+8";*/
/*	kb-select-9: "Super+9";*/
/*	kb-select-10: "Super+0";*/
/*	ml-row-left: "ScrollLeft";*/
/*	ml-row-right: "ScrollRight";*/
/*	ml-row-up: "ScrollUp";*/
/*	ml-row-down: "ScrollDown";*/
/*	me-select-entry: "MousePrimary";*/
/*	me-accept-entry: "MouseDPrimary";*/
/*	me-accept-custom: "Control+MouseDPrimary";*/
}
@import "/usr/share/rofi/themes/fancy.rasi"
```

## polybar

> **path: ~/.config/polybar/config**
>
> **path: ~/.config/polybar/launch.sh**
>
> **path: ~/.config/polybar/music**
>
> **path: ~/.config/polybar/play-pause**

在终端中执行

```
polybar -m
```

查看当前monitor，并在polybar中修改成对应的值

1. config

```
;==========================================================
;
;   ██████╗  ██████╗ ██╗  ██╗   ██╗██████╗  █████╗ ██████╗
;   ██╔══██╗██╔═══██╗██║  ╚██╗ ██╔╝██╔══██╗██╔══██╗██╔══██╗
;   ██████╔╝██║   ██║██║   ╚████╔╝ ██████╔╝███████║██████╔╝
;   ██╔═══╝ ██║   ██║██║    ╚██╔╝  ██╔══██╗██╔══██║██╔══██╗
;   ██║     ╚██████╔╝███████╗██║   ██████╔╝██║  ██║██║  ██║
;   ╚═╝      ╚═════╝ ╚══════╝╚═╝   ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝
;
;==========================================================

[colors]
background = #00000000
background-alt = #00000000

foreground = #FFFF00
foreground-alt = #FF0000

primary = #ffb52a
secondary = #e60053
alert = #bd2c40

cpu = #39BBF5
date = #F8514B
time = #FF00E7
memery = #FF69B4
battery = #38F156
temperature = #1DF8E6
eth = #F98D1A
player = #B714FF
pause = #999
;==========================================================

[bar/luispolybar]
;monitor = ${env:MONITOR:eDP-1}
monitor = ${env:MONITOR:HDMI-1}
dpi = 100
bottom = true
width = 100%
height = 30
radius = 6.0
fixed-center = true

offset-x = 0
offset-y = 0

background = ${colors.background}
foreground = ${colors.foreground}

line-size = 0
line-color = #f00

border-size = 0
border-color = #00000000

padding-left = 0
padding-right = 2
padding-top = 0
padding-bottom = 0

module-margin-left = 1
module-margin-right = 2
module-margin-top = 0
module-margin-bottom = 0

font-0 = fixed:pixelsize=20:style:bold;5
font-1 = source han sans cn:style=bold:pixelsize=20:antialias=true;5
font-2 = Font Awesome 5 Free:style=Solid:pixelsize=20;5
font-3 = Font Awesome 5 Brands:style=Regular:pixelsize=20;5
font-4 = NotoEmoji:scale=6;5
font-5 = FiraMono:size=20;0
;font-6 = "Font Awesome 5 Free:style=Regular:pixelsize=20;0"

modules-left = i3
modules-center = previous play-pause next player-metadata
modules-right = pulseaudio wlan eth memory temperature cpu battery date time

tray-position = none
tray-padding = 2
tray-transparent = true

;wm-restack = i3

;override-redirect = true

cursor-click = pointer
cursor-scroll = ns-resize

;==========================================================

[module/next]
type = custom/text
content = ""
format = <label>
content-foreground = ${colors.player}
content-background = ${colors.background}
click-left = playerctl next
tail = true

[module/previous]
type = custom/text
content = ""
content-foreground = ${colors.player}
content-background = ${colors.background}
click-left = playerctl previous

[module/play-pause]
type = custom/script
interval = 1
label = %output%
label-foreground = ${colors.player}
content-background = ${colors.background}
click-left = playerctl play-pause
exec = ~/.config/polybar/play-pause

[module/player-metadata]
type = custom/script
interval = 1
label = %output%
label-foreground = ${colors.pause}
label-font = 1
exec = ~/.config/polybar/music
;==========================================================

[module/xwindow]
type = internal/xwindow
label = %title:0:30:...%

;==========================================================

[module/xkeyboard]
type = internal/xkeyboard
blacklist-0 = num lock

format-prefix =
format-prefix-foreground = ${colors.secondary}
format-prefix-underline = #00000000

label-layout = %layout%
label-layout-underline = ${colors.background}

label-indicator-padding = 2
label-indicator-margin = 1
label-indicator-background = ${colors.background}
label-indicator-underline = ${colors.background}

;==========================================================

[module/filesystem]
type = internal/fs
interval = 25

mount-0 = /
label-mounted = %{F#0a81f5}%mountpoint%%{F-}: %percentage_used%%
labelunmounted = %mountpoint% not mounted
label-unmounted-foreground = ${colors.foreground-alt}

;==========================================================

[module/bspwm]
type = internal/bspwm

label-focused = %index%
label-focused-background = ${colors.background-alt}
label-focused-underline= ${colors.primary}
label-focused-padding = 2

label-occupied = %index%
label-occupied-padding = 2

label-urgent = %index%!
label-urgent-background = ${colors.alert}
label-urgent-padding = 2

label-empty = %index%
label-empty-foreground = ${colors.foreground-alt}
label-empty-padding = 2

; Separator in between workspaces
; label-separator = |

;==========================================================

[module/i3]
type = internal/i3
format = <label-state> <label-mode>
index-sort = true
wrapping-scroll = false
strip-wsnumbers = false
pin-workspaces = true

label-mode-padding = 2
label-mode-foreground = #FF1659
label-mode-background = ${colors.primary}

label-focused = %name%
label-focused-background = ${colors.background-alt}
label-focused-foreground = #FF1659
label-focused-underline= #00000000
label-focused-padding = 2

label-unfocused = %name%
label-unfocused-foreground = #3F4BFF
label-unfocused-padding = 2

label-visible = %name%
label-visible-background = ${self.label-focused-background}
label-visible-underline = ${self.label-focused-underline}
label-visible-padding = ${self.label-focused-padding}

label-urgent = %name%
label-urgent-background = ${colors.alert}
label-urgent-padding = 2

label-separator = |
label-separator-foreground = #ADFF5F

#ws-icon-0 = 1;
#ws-icon-1 = 2;
#ws-icon-2 = 3;
#ws-icon-3 = 4;
#ws-icon-6 = 5;
#ws-icon-7 = 6;
#ws-icon-8 = 7;
#ws-icon-9 = 8;





;==========================================================

[module/mpd]
type = internal/mpd
format-online = <label-song>  <icon-prev> <icon-stop> <toggle> <icon-next>
label-offline = no music no life
label-song = %artist% - %title%
icon-prev = 
icon-stop = 
icon-play = 
icon-pause = 
icon-next = 

toggle-on-foreground = #FFF
toggle-off-foreground = #FFF

label-song-maxlen = 25
label-song-ellipsis = true

host = 127.0.1.1
port = 6600

;==========================================================

[module/xbacklight]
type = internal/xbacklight

format = <label> <bar>
label = BL

bar-width = 10
bar-indicator = |
bar-indicator-foreground = #fff
bar-indicator-font = 2
bar-fill = ─
bar-fill-font = 2
bar-fill-foreground = #9f78e1
bar-empty = ─
bar-empty-font = 2
bar-empty-foreground = ${colors.foreground-alt}

;==========================================================

[module/backlight-acpi]
inherit = module/xbacklight
type = internal/backlight
card = intel_backlight

;==========================================================

[module/cpu]
type = internal/cpu
interval = 2

format-prefix = ""
format-prefix-foreground = ${colors.cpu}
format-underline = #00000000

label = %percentage:2%%
label-foreground = ${colors.cpu}
label-font = 1

;==========================================================

[module/memory]
type = internal/memory
interval = 2

format-prefix = " "
format-prefix-foreground = ${colors.memery}
format-underline = #00000000

label = %percentage_used%%
label-foreground = ${colors.memery}
label-font = 1

;==========================================================



[module/wlan]
type = internal/network
interface = wlp0s20f3
interval = 3.0

format-connected =  <label-connected>
format-connected-foreground = ${colors.eth}
format-connected-underline = #00000000
label-connected = %essid%

format-disconnected =

ramp-signal-0 = 
ramp-signal-1 = 
ramp-signal-2 = 
ramp-signal-3 = 
ramp-signal-4 = 
ramp-signal-foreground = ${colors.foreground-alt}

;==========================================================

[module/eth]
type = internal/network
interface = enp7s0
interval = 3.0

format-connected-prefix = "📶"
format-connected-prefix-foreground = ${colors.eth}
format-connected-prefix-font = 5
;format-disconnected-prefix = "⚠"
;format-disconnected-prefix-foreground = ${colors.eth}
;format-disconnected-prefix-font = 5

format-connected = <label-connected>
;format-disconnected = <label-disconnected>

format-connected-underline = #00000000
;format-disconnected-underline = ${self.format-connected-underline}

label-connected = %local_ip%
label-connected-foreground = ${colors.eth}

;label-disconnected = %ifname% disconnected
;label-disconnected-foreground = ${colors.eth}


;==========================================================

[module/date]
type = internal/date
interval = 5

date = " %Y-%m-%d  %a"
date-alt = " %Y-%m-%d  %a"

format-prefix = ""
format-prefix-foreground = ${colors.date}
format-underline = #00000000

label = %date%
label-font = 1
label-foreground = ${colors.date}

;==========================================================

[module/time]
type = internal/date
interval = 5

time = %H:%M
time-alt = %H:%M:%S %p

format-prefix = " "
format-prefix-foreground = ${colors.time}
format-underline = #00000000

label = %time%
label-font = 1
label-foreground = ${colors.time}

;==========================================================

[module/pulseaudio]
type = internal/pulseaudio
format-volume = <label-volume>

label-volume =  %percentage%%
label-volume-foreground = ${root.foreground}
label-volume-font = 1

label-muted = 🔇 sound muted
label-muted-foreground = #A51C23
label-muted-font = 1

bar-volume-width = 10
bar-volume-foreground-0 = #55aa55
bar-volume-foreground-1 = #55aa55
bar-volume-foreground-2 = #55aa55
bar-volume-foreground-3 = #55aa55
bar-volume-foreground-4 = #55aa55
bar-volume-foreground-5 = #f5a70a
bar-volume-foreground-6 = #ff5555
bar-volume-gradient = false
bar-volume-indicator = |
bar-volume-indicator-font = 1
bar-volume-fill = ━
bar-volume-fill-font = 1
bar-volume-empty = ─
bar-volume-empty-font = 1
bar-volume-empty-foreground = ${colors.foreground-alt}

;==========================================================

[module/battery]
type = internal/battery
battery = BAT0
adapter = ADP1
full-at = 100

format-charging = <animation-charging> <label-charging>
format-charging-underline = #00000000

format-discharging = <ramp-capacity> <label-discharging>
format-discharging-underline = ${self.format-charging-underline}

ramp-capacity-0 = 
ramp-capacity-1 = 
ramp-capacity-2 = 
ramp-capacity-3 = 
ramp-capacity-foreground = ${colors.battery}

animation-charging-0 = 
animation-charging-1 = 
animation-charging-2 = 
animation-charging-3 = 
animation-charging-foreground = ${colors.battery}
animation-charging-framerate = 750

label-charging-foreground = ${colors.battery}
label-discharging-foreground = ${colors.battery}

;==========================================================

[module/temperature]

type = internal/temperature
thermal-zone = 0
warn-temperature = 60

format = <ramp> <label>
format-underline = #00000000

format-warn = <ramp> <label-warn>
format-warn-underline = ${self.format-underline}

label = %temperature-c%
label-foreground = ${colors.temperature}
label-font = 1

label-warn = %temperature-c%
label-warn-foreground = ${colors.temperature}
label-warn-font = 1

ramp-0 = 
ramp-1 = 
ramp-2 = 
ramp-foreground = ${colors.temperature}

;==========================================================

[module/powermenu]
type = custom/menu

expand-right = true

format-spacing = 1

label-open = 
label-open-foreground = ${colors.battery}
label-close =  cancel
label-close-foreground = ${colors.battery}
label-separator = |
label-separator-foreground = ${colors.battery}

menu-0-0 = reboot
menu-0-0-exec = menu-open-1
menu-0-1 = power off
menu-0-1-exec = menu-open-2

menu-1-0 = cancel
menu-1-0-exec = menu-open-0
menu-1-1 = reboot
menu-1-1-exec = sudo reboot

menu-2-0 = power off
menu-2-0-exec = sudo poweroff
menu-2-1 = cancel
menu-2-1-exec = menu-open-0

;==========================================================

[settings]
screenchange-reload = true

;==========================================================

[global/wm]
margin-top = 0
margin-bottom = 0
```

2. launch.sh

```
killall -q polybar
while pgrep -u $UID -x polybar >/dev/null; do sleep 1; done
polybar luispolybar
```

3. music

```
player_status=$(playerctl status 2> /dev/null)
if [[ $? -eq 0 ]]; then
    metadata="$(playerctl metadata artist) - $(playerctl metadata title) "
fi

# Foreground color formatting tags are optional
if [[ $player_status = "Playing" ]]; then
    echo "%{F#FF0000}$metadata%{F-}";
elif [[ $player_status = "Paused" ]]; then
    echo "%{F#999}$metadata%{F-}"
else
    echo ""
fi
```

4. play-pause

```
player_status=$(playerctl status 2> /dev/null)

if [[ $player_status = "Playing" ]]; then
    echo "";
elif [[ $player_status = "Paused" ]]; then
    echo "";
else
    echo "";
fi
```

















