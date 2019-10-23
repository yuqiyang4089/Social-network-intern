port module Main exposing (main)

import Browser
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Bootstrap.CDN as CDN
import Bootstrap.Navbar as Navbar
import Bootstrap.Grid as Grid
import Bootstrap.Button as Button
import Bootstrap.Tab as Tab
import Bootstrap.Form as Form
import Bootstrap.Form.Select as Select
import Bootstrap.Form.Checkbox as Checkbox
port pick : Int -> Cmd msg

main : Program () Model Msg
main =
    Browser.element
        { view = view
        , update = update
        , subscriptions = subscriptions
        , init = \() -> init
        }

-- "Control" = Control panel is close
-- "X" = Control panel is open
type PanelStatus
    = Open | Close

type alias Panel =
    {
      button : String,
      status : PanelStatus,
      margin: String,
      maxHeight: String
  }

type alias ColorPicker =
    {
        control: String,
        history: String,
        historyButton: String
    }

type alias Model =
    { navState : Navbar.State,
      tabState : Tab.State,
      controlPanel: Panel,
      historyPanel: Panel,
      colors: ColorPicker
  }

init : ( Model, Cmd Msg )
init =
    let
        ( navState, navCmd ) = Navbar.initialState NavMsg

        controlPanel = { button = "./static/src/rcs/r_arrow.png", status = Open, margin = "0px", maxHeight = "" }

        historyPanel = { button = "./static/src/rcs/up.png", status = Close, margin = "-178px", maxHeight = "calc(100vh - 67px)" }

        colors = { control = "#a6a6a6", history = "#e6e6e6", historyButton = "#d9d9d9" }

    in
        ( {
            navState = navState,
            tabState = Tab.initialState,
            controlPanel = controlPanel,
            historyPanel = historyPanel,
            colors = colors
        }, navCmd )

type Msg
    = NavMsg Navbar.State | Control | TabMsg Tab.State | History |Select_index Int

subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch [
        Navbar.subscriptions model.navState NavMsg,
        Tab.subscriptions model.tabState TabMsg
    ]

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NavMsg state ->
            ( { model | navState = state }
            , Cmd.none
            )
        Control ->
            case model.controlPanel.status of
                Open ->
                    let
                        controlPanel = { button = "./static/src/rcs/sum.png", status = Close, margin = "-320px", maxHeight = "" }
                    in
                    ( { model | controlPanel = controlPanel }
                    , Cmd.none
                    )
                Close ->
                    let
                        controlPanel = { button = "./static/src/rcs/r_arrow.png", status = Open, margin = "0px", maxHeight = "" }
                    in
                    ( { model | controlPanel = controlPanel }
                    , Cmd.none
                    )
        TabMsg state ->
            ( { model | tabState = state }
            , Cmd.none
            )
        History ->
            case model.historyPanel.status of
                Open ->
                    let
                        historyPanel = { button = "./static/src/rcs/up.png", status = Close, margin = "-178px", maxHeight = "calc(100vh - 67px)" }
                    in
                    ( { model | historyPanel = historyPanel }
                    , Cmd.none
                    )
                Close ->
                    let
                        historyPanel = { button = "./static/src/rcs/down.png", status = Open, margin = "0px", maxHeight = "calc(100vh - 195px)" }
                    in
                    ( { model | historyPanel = historyPanel }
                    , Cmd.none
                    )
        Select_index state ->
                  ( model, pick state)

view : Model -> Html Msg
view model =
    div [
        style "height" "100vh"
    ] [
        CDN.stylesheet,
        div [
            style "align-items" "stretch",
            style "overflow" "hidden",
            style "width" "100%",
            style "height" "100%",
            style "display" "flex"
        ] [
            div [
                style "width" "100%",
                style "height" "100%",
                style "transition" "all 0.3s",
                class "trans"
            ] [
                control model,
                mainContent model
            ],
            div [
                style "min-width" "320px",
                style "max-width" "320px",
                style "height" "100%",
                style "background" model.colors.control,
                style "transition" "all 0.3s",
                style "margin-right" model.controlPanel.margin,
                style "color" "white"
            ] [
                tab model
            ]
        ]
    ]


tab : Model -> Html Msg
tab model =
    Tab.config TabMsg
        |> Tab.withAnimation
        |> Tab.items [
            Tab.item {
                id = "tabItem1",
                link = Tab.link [
                    style "height" "45px",
                    style "width" "80px"
                ] [ text "Node" ],
                pane = Tab.pane [
                    style "height" "calc(100vh - 46px)"
                ] [

                    -- select_V model,

                     ]
                }
            , Tab.item {
                id = "tabItem2",
                link = Tab.link [
                    style "height" "45px",
                    style "width" "80px"
                ] [ text "Edge" ],
                pane = Tab.pane [
                    style "height" "calc(100vh - 46px)"
                ] [

                ]
                  }
            , Tab.item {
                id = "tabItem3",
                link = Tab.link [
                    style "height" "45px",
                    style "width" "80px"
                ] [ text "Graph" ],
                pane = Tab.pane [
                    style "height" "calc(100vh - 46px)"
                ] []
            }
            , Tab.item {
                id = "tabItem4",
                link = Tab.link [
                    style "height" "45px",
                    style "width" "80px"
                ] [ text "Layout" ],
                pane = Tab.pane [
                    style "height" "calc(100vh - 46px)"
                ] []
            }
        ]
        |> Tab.view model.tabState

select_V : Model -> Html Msg
select_V model =
        div [
            style "height" "45%",
            style "width" "100%",
            style "padding" "15px"
            -- style "background" model.colors.historyButton
        ] [
            Form.form[] [
                Form.group [] [
                    Form.label [ for "myselect" ] [ text "Node Color" ],
                    Select.custom [ Select.id "myselect" ] [
                      Select.item [onClick (Select_index 1) ] [ text "Select"],
                      Select.item [onClick (Select_index 2) ] [ text "Number of People"],
                      Select.item [onClick (Select_index 4) ] [ text "None"]
                    ]
                ],
                Form.group [] [
                    Form.label [ for "myselect2" ] [ text "Node Size" ],
                    Select.custom [ Select.id "myselect"]  [
                        Select.item [onClick (Select_index 7) ] [ text "Select"],
                        Select.item [onClick (Select_index 5)] [ text "None"],
                        Select.item [onClick (Select_index 6)] [ text "Number of People"]
                    ]
                ]
            ]
        ]

select_E : Model -> Html Msg
select_E model =
        div [
            style "height" "45%",
            style "width" "100%",
            style "padding" "15px"
            -- style "background" model.colors.historyButton
        ] [
            Form.form[] [
                Form.group [] [
                    Form.label [ for "myselect" ] [ text "Edge Color" ],
                    Select.custom [ Select.id "myselect" ] [
                      Select.item [onClick (Select_index 1) ] [ text "Select"]
                    ]
                ],
                Form.group [] [
                    Form.label [ for "myselect2" ] [ text "Edge Size" ],
                    Select.custom [ Select.id "myselect"]  [
                        Select.item [onClick (Select_index 5)] [ text "Select"]
                        -- Select.item [onClick (Select_index 6)] [ text "Number of People"]
                    ]
                ]
            ]
        ]

control : Model -> Html Msg
control model =
    Navbar.config NavMsg
        |> Navbar.attrs [ style "height" "45px" ]
        |> Navbar.withAnimation
        |> Navbar.collapseLarge
        |> Navbar.brand [ href "#"] [ text "Social Network Vis"]
        |> Navbar.customItems
            [ Navbar.formItem []
                [
                  Button.button
                    [ Button.secondary, Button.attrs[onClick Control, id "controlBut"]]
                    [
                                    img [
                                        src model.controlPanel.button,
                                        style "width" "25px",
                                        style "height" "25px",
                                        style "padding-bottom" "1px"
                                    ] []
                     ]
                ]
            ]

        |> Navbar.view model.navState

mainContent : Model -> Html Msg
mainContent model =
    div [
        style "height" "calc(100vh - 45px)",
        style "display" "flex",
        style "flex-direction" "column",
        style "align-items" "stretch"
    ] [
        multiTab model,
        history model

    ]

history : Model -> Html Msg
history model =
        div [
            style "height" "150px",
            style "width" "100%",
            style "background" model.colors.historyButton,
            -- style "margin-top" "auto",
            style "margin-bottom" model.historyPanel.margin,
            style "transition" "all 0.3s",
            class "trans"
        ] [
            div [
                style "height" "22px",
                style "width" "100%",
                style "text-align" "center",
                class "control",
                id "hisBut",
                -- style "box-shadow" "0px -2px gray",
                onClick History
            ] [
                img [
                    src model.historyPanel.button,
                    style "width" "20px",
                    style "height" "20px",
                    style "padding-bottom" "1px"
                ] []
            ],
            div [
                style "height" "128px",
                style "width" "100%",
                style "background" model.colors.history,
                style "padding" "10px",
                id "history"
            ] []
        ]

multiTab : Model -> Html Msg
multiTab model =
    div [
        style "height" "100%",
        style "max-height" model.historyPanel.maxHeight,
        style "width" "100%",
        style "transition" "all 0.3s",
        style "padding" "10px",
        id "content-his"
        -- style "background" "#ffb3b3"
    ] [


    ]
