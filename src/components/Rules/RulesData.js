export const rules = [{
    id: 1,
    title: 'Abilities',
    content: `<p>Cards and faction sheets each have abilities that players can resolve to trigger various game effects.</p><ul> <li> <span>1.1</span> <p>Each ability describes when and how a player can resolve it.</p></li><li> <span>1.2</span> <p>If a card has multiple abilities, each ability is presented as its own paragraph.</p></li><li> <span>1.3</span> <p>If an ability contains the word “Action,” a player must use a component action during the action phase to resolve that ability.</p></li><li> <span>1.4</span> <p>If an ability uses the word “cannot,” that effect is absolute.</p></li><li> <span>1.5</span> <p>When a player resolves an ability, he must resolve the ability in its entirety. Any parts of the ability preceded by the word “may” are optional, and the player resolving the ability may choose not to resolve those parts.</p></li><li> <span>1.6</span> <p>Abilities on components that remain in play are mandatory unless they use the word “may.”</p></li><li> <span>1.7</span> <p>If an ability has multiple effects separated by the word “and,” a player must resolve as many of the ability’s effects as possible. However, if he cannot resolve all of its effects, he is allowed to resolve as many as he can.</p></li></ul><div class="subheading"> <span>1.8</span> <h3>Costs</h3></div><ul> <li> <span>1.9</span> <p>Some abilities have a cost that is followed by an effect. The cost of an ability is separated from the effect by the word “to” or by a semicolon. A player cannot resolve the effect of such an ability if he cannot resolve that ability’s cost.</p></li><li> <span>1.10</span> <p>Some examples of an ability’s cost include spending resources, spending trade goods, spending command tokens, exhausting cards, and activating specific systems.</p></li></ul><div class="subheading"> <span>1.11</span> <h3>Timing</h3></div><ul> <li> <span>1.12</span> <p>If the timing of an ability uses the word “after,” the ability’s effect occurs immediately after the described timing event.</p><ul> <li><p>For example, if an ability is resolved “after a ship is destroyed,” the ability must be resolved as soon as the ship is destroyed and not later during that turn or round.</p></li></ul> </li><li> <span>1.13</span> <p>If the timing of an ability uses the word “when,” the ability’s effect occurs at the moment of the described timing event.</p><ul> <li><p>Such an ability typically modifies or replaces the timing event in some way.</p></li></ul> </li><li> <span>1.14</span> <p>Effects that occur “when” an event happens take priority over effects that occur “after” an event happens.</p></li><li> <span>1.15</span> <p>If an ability uses the word “then,” a player must resolve the effect that occurs before the word “then” before resolving the effect that occurs after the word “then.”</p></li><li> <span>1.16</span> <p>Each ability can be resolved once for each occurrence of that ability’s timing event. For example, if an ability is resolved “At the start of combat,” it can be resolved at the start of each combat.</p></li></ul><div class="subheading"> <span>1.17</span> <h3>Component-specific Rules</h3></div><ul> <li> <span>1.18</span> <p>The opening paragraph of each ability found on an action card describes when a player can resolve that card’s ability.</p></li><li> <span>1.19</span> <p>The opening paragraph of most abilities found on promissory notes describes when a player can resolve that card’s ability.</p><ul> <li><p>Some promissory notes have abilities that trigger as soon as a player receives the card.</p></li></ul> </li><li> <span>1.20</span> <p>Abilities on agenda cards correspond to an outcome. Players resolve these abilities during the agenda phase after players vote for a particular outcome.</p></li><li> <span>1.21</span> <p>Each faction has faction abilities presented on its faction sheet. Each faction’s flagship has one or more unique abilities. Some abilities provide players with perpetual effects.</p></li><li> <span>1.22</span> <p>Some units have unit abilities. These abilities are named and presented above a unit’s attributes on a player’s faction sheet or on a unit upgrade card. Each unit ability has unique rules for when a player can resolve that ability. The following abilities are unit abilities:</p><ul> <li><p>Anti-Fighter Barrage</p></li><li><p>Bombardment</p></li><li><p>Planetary Shield</p></li><li><p>Production</p></li><li><p>Space Cannon</p></li><li><p>Sustain Damage</p></li></ul> </li><li> <span>1.23</span> <p>If a unit’s ability uses the phrase “this system” or “this planet,” the ability is referring to the system or planet that contains that unit.</p></li></ul>`
},{
    id: 2,
    title: 'Action Cards',
    content: `<p>Action cards provide players with various abilities that they can resolve as described on the cards.</p><ul> <li> <span>2.1</span> <p>Each player draws one action card during each status phase. </p></li><li> <span>2.2</span> <p>Players can draw action cards by resolving the primary and secondary abilities of the “Politics” strategy card. </p></li><li> <span>2.3</span> <p>When a player draws an action card, he takes the top card from the action card deck and adds it to his hand of action cards. </p></li><li> <span>2.4</span> <p>Each player can have a maximum of <b>seven action cards</b> in his hand at any time. If a player ever has more than seven action cards, he must choose which seven cards he wishes to keep and discard the rest. </p><ul> <li><p>A game effect can increase or decrease the number of cards a player can have in his hand.</p></li></ul> </li><li> <span>2.5</span> <p>A player’s action cards remain hidden from other players until they are played. </p></li><li> <span>2.6</span> <p>The first paragraph of each action card is presented in bold text and describes the timing of when that card’s ability can be resolved.</p><ul> <li><p>If an action card contains the word “Action,” a player must use a component action during the action phase to resolve the ability. A player cannot resolve a component action if he cannot completely resolve its ability. </p></li><li><p>Multiple action cards with the <b>same</b> name cannot be played during a single timing window to affect the same units or game mechanic. </p></li></ul> </li><li> <span>2.7</span> <p>To play an action card, a player reads and resolves the card’s ability text. Then, he discards the card, placing it in the action discard pile. </p></li><li> <span>2.8</span> <p>If an action card is canceled, that card has no effect and is discarded. </p></li><li> <span>2.9</span> <p>If there are multiple action cards that players wish to resolve at the same time <b>during the strategy or agenda phases</b>, players take turns resolving action cards starting with the speaker and proceeding clockwise. This process repeats until each player has resolved all the action cards that he wishes to resolve during that window. </p></li><li> <span>2.10</span> <p>If there are multiple action cards that players wish to resolve at the same time <b>during the action phase</b>, each player takes a turn resolving one action card in initiative order, beginning with the active player. This process repeats until each player has resolved all the action cards that he wishes to resolve during that window. </p></li></ul>`
},{
    id: 3,
    title: 'Action Phase',
    content: `<p>During the action phase, each player takes a turn in initiative order. During a player’s turn, he performs a single action. After each player has taken a turn, player turns begin again in initiative order. This process continues until all players have passed. </p><ul> <li> <span>3.1</span> <p>During a player’s turn, he may perform one of the following three types of actions: a strategic action, a tactical action, or a component action.</p></li><li> <span>3.2</span> <p>If a player cannot perform an action, he must pass.</p></li><li> <span>3.3</span> <p>After a player has passed, he cannot perform additional actions during that action phase.</p><ul> <li><p>A player that has passed can still resolve the secondary ability of other players’ strategy cards. </p></li></ul> </li><li> <span>3.4</span> <p>A player cannot pass until he has performed a strategic action.</p><ul> <li><p>During a three-player or four-player game, a player cannot pass until he has exhausted both of his strategy cards. </p></li></ul> </li><li> <span>3.5</span> <p>After all players have passed, play proceeds to the status phase.</p></li></ul>`
},{
    id: 4,
    title: 'Active Player',
    content: `<p>The active player is the player taking a turn during the action phase.</p><ul> <li> <span>4.1</span> <p>During the action phase, the player who is first in initiative order is the first active player. </p></li><li> <span>4.2</span> <p>After the active player takes a turn, the next player in initiative order becomes the active player. </p></li><li> <span>4.3</span> <p>After the last player in initiative order takes a turn, the player who is first in initiative order becomes the active player again, and turns begin again in initiative order, ignoring any players who have already passed. </p></li></ul>`
},{
    id: 5,
    title: 'Active System',
    content: ''
},{
    id: 6,
    title: 'Adjacency',
    content: ''
},{
    id: 7,
    title: 'Agenda Card',
    content: ''
},{
    id: 8,
    title: 'Agenda Phase',
    content: ''
},{
    id: 9,
    title: 'Anomalies',
    content: ''
},{
    id: 10,
    title: 'Anti-fighter Barrage (Unit Ability)',
    content: ''
},{
    id: 11,
    title: 'Asteroid Field',
    content: ''
},{
    id: 12,
    title: 'Attach',
    content: ''
},{
    id: 13,
    title: 'Attacker',
    content: ''
},{
    id: 14,
    title: 'Blockaded',
    content: ''
},{
    id: 15,
    title: 'Bombardment (Unit Ability)',
    content: ''
},{
    id: 16,
    title: 'Capacity (Attribute)',
    content: ''
},{
    id: 17,
    title: 'Combat (Attribute)',
    content: ''
},{
    id: 18,
    title: 'Command Sheet',
    content: ''
},{
    id: 19,
    title: 'Command Tokens',
    content: ''
},{
    id: 20,
    title: 'Commodities',
    content: ''
},{
    id: 21,
    title: 'Component Action',
    content: ''
},{
    id: 22,
    title: 'Component Limitations',
    content: ''
},{
    id: 23,
    title: 'Construction (Strategy Card)',
    content: ''
},{
    id: 24,
    title: 'Control',
    content: ''
},{
    id: 25,
    title: 'Cost (Attribute)',
    content: ''
},{
    id: 26,
    title: 'Custodians Token',
    content: ''
},{
    id: 27,
    title: 'Deals',
    content: ''
},{
    id: 28,
    title: 'Defender',
    content: ''
},{
    id: 29,
    title: 'Destroyed',
    content: ''
},{
    id: 30,
    title: 'Diplomacy (Strategy Card)',
    content: ''
},{
    id: 31,
    title: 'Elimination',
    content: ''
},{
    id: 32,
    title: 'Exhausted',
    content: ''
},{
    id: 33,
    title: 'Fighter Tokens',
    content: ''
},{
    id: 34,
    title: 'Fleet Pool',
    content: ''
},{
    id: 35,
    title: 'Game Board',
    content: ''
},{
    id: 36,
    title: 'Game Round',
    content: ''
},{
    id: 37,
    title: 'Gravity Rift',
    content: ''
},{
    id: 38,
    title: 'Ground Combat',
    content: ''
},{
    id: 39,
    title: 'Ground Forces',
    content: ''
},{
    id: 40,
    title: 'Imperial (Strategy Card)',
    content: ''
},{
    id: 41,
    title: 'Infantry Tokens',
    content: ''
},{
    id: 42,
    title: 'Influence',
    content: ''
},{
    id: 43,
    title: 'Initiative Order',
    content: ''
},{
    id: 44,
    title: 'Invasion',
    content: ''
},{
    id: 45,
    title: 'Leadership (Strategy Card)',
    content: ''
},{
    id: 46,
    title: 'Mecatol Rex',
    content: ''
},{
    id: 47,
    title: 'Modifiers',
    content: ''
},{
    id: 48,
    title: 'Move (Attribute)',
    content: ''
},{
    id: 49,
    title: 'Movement',
    content: ''
},{
    id: 50,
    title: 'Nebula',
    content: ''
},{
    id: 51,
    title: 'Neighbors',
    content: ''
},{
    id: 52,
    title: 'Objective Cards',
    content: ''
},{
    id: 53,
    title: 'Opponent',
    content: ''
},{
    id: 54,
    title: 'PDS (Planetary Defense System)',
    content: ''
},{
    id: 55,
    title: 'Planets',
    content: ''
},{
    id: 56,
    title: 'Planetary Shield',
    content: ''
},{
    id: 57,
    title: 'Politics (Strategy Card)',
    content: ''
},{
    id: 58,
    title: 'Producing Units',
    content: ''
},{
    id: 59,
    title: 'Production (Unit Ability)',
    content: ''
},{
    id: 60,
    title: 'Promissory Notes',
    content: ''
},{
    id: 61,
    title: 'Readied',
    content: ''
},{
    id: 62,
    title: 'Reinforcements',
    content: ''
},{
    id: 63,
    title: 'Rerolls',
    content: ''
},{
    id: 64,
    title: 'Resources',
    content: ''
},{
    id: 65,
    title: 'Ships',
    content: ''
},{
    id: 66,
    title: 'Space Cannon (Unit Ability)',
    content: ''
},{
    id: 67,
    title: 'Space Combat',
    content: ''
},{
    id: 68,
    title: 'Space Dock',
    content: ''
},{
    id: 69,
    title: 'Speaker',
    content: ''
},{
    id: 70,
    title: 'Status Phase',
    content: ''
},{
    id: 71,
    title: 'Strategic Action',
    content: ''
},{
    id: 72,
    title: 'Strategy Card',
    content: ''
},{
    id: 73,
    title: 'Stategy Phase',
    content: ''
},{
    id: 74,
    title: 'Structures',
    content: ''
},{
    id: 75,
    title: 'Supernova',
    content: ''
},{
    id: 76,
    title: 'Sustain Damage (Unit Ability)',
    content: ''
},{
    id: 77,
    title: 'System Tiles',
    content: ''
},{
    id: 78,
    title: 'Tactical Action',
    content: ''
},{
    id: 79,
    title: 'Technology',
    content: ''
},{
    id: 80,
    title: 'Technology (Strategy Card)',
    content: ''
},{
    id: 81,
    title: 'Trade (Strategy Card)',
    content: ''
},{
    id: 82,
    title: 'Trade Goods',
    content: ''
},{
    id: 83,
    title: 'Transactions',
    content: ''
},{
    id: 84,
    title: 'Transport',
    content: ''
},{
    id: 85,
    title: 'Units',
    content: ''
},{
    id: 86,
    title: 'Unit Upgrades',
    content: ''
},{
    id: 87,
    title: 'Victory Points',
    content: ''
},{
    id: 88,
    title: 'Warfare (Strategy Card)',
    content: ''
},{
    id: 89,
    title: 'Wormholes',
    content: ''
}]

