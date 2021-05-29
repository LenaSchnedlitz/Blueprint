# https://github.com/LenaSchnedlitz/ASCII-Banner

FAT_RED="\e[1;31m"
WHITE="\e[0;37m"
YELLOW="\e[0;33m"
BLUE="\e[0;34m"
RESET="\e[0m"

RANDOM_COLORS=("$WHITE" "$YELLOW" "$BLUE")
random() {
    echo "${RANDOM_COLORS[$((RANDOM%3))]}"
}

LOGO="
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~·-===))===-·~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~·)tnd@@@@@@@@@@@@@@@@dnt)-~~~~~~~~~~~
~~~~~~~·(nd@@@@@@@@@@@@@@@@@@@@@@@@@@dn(·~~~~~~~
~~~~~=h@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@h=~~~~~
~~~  --------d@@@@@@@@@@@@@@@@@@@@@@@@@@@@@d=~~~
~~)}}}]      d@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(~~
~=@@@@d      d@@@@@@@@@@@@@@@@@dddhhLhhdd@@@@@=~
~h@@@@d      d@@@@@@@@@@@@@@}=             =n@h~
~h@@@@d      d@@@@@@@@@@@@@·     ]d@@@ddL}]d@@L~
~=@@@@d      d@@@@@@@@@@@@@(      -=([ehd@@@@@=~
~~(@@@d      d@@@@@@@@@@@@@@@ht)=-        ·=n(~~
~~~-d@d      d@@@@@@@@@@@@@@@@@@@@@@dh)      ~~~
~~~~~=n)     ·)]](=e@@@@@@n)  =)>leelc-    ~~~~~
~~~~~~~ · ··     ·-=d@@@@@dac=-·         ~~~~~~~
~~~~~~~~~~~·=czdd@@@@@@@@@@@@@@ddac=·~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~·-========-·~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
"

PADDING="                         " # 25 spaces -> line length 100

# set new line symbol
OLD_IFS=$IFS
IFS=$'\n'

# print
for line in $LOGO; do
  start_dot="$(random)◌"
  end_dot="$(random)◌"
  logo_part=$(echo "$FAT_RED$line$RESET" | tr "~" " ")

  echo -e "$start_dot$PADDING$logo_part$PADDING$end_dot"
done

# reset
echo -e "$RESET"
IFS=$OLD_IFS
