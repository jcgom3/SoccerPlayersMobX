import { observer } from 'mobx-react'
import Athlete from './Athlete'
import TradeForm from './TradeForm'

const cristianoRonaldo = new Athlete('Cristiano Ronaldo', 37, 5)
const lionelMessi = new Athlete('Lionel Messi', 35, 7)
const karimBenzema = new Athlete('Karim Benzema', 34, 1)

function Roster() {
  return (
    <table>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Teams Played for</th>
            <th>Trade To</th>
            <th>Ballon D'Or</th>
            <th>New Ballon D'Or Winner</th>
        </tr>
        {[cristianoRonaldo, lionelMessi, karimBenzema].map((athlete)=>{
            return (
                <tr key={athlete.name}>
                    <td>{athlete.name}</td>
                    <td>{athlete.age}</td>
                    <td>{athlete.teamHistory}</td>
                    <td>
                        <TradeForm athlete={athlete} />
                    </td>
                    <td>{athlete.ballonDOr}</td>
                    <td>
                        <button
                            type='button'
                            style={{width: "100%"}}
                            onClick={()=> athlete.wonBallonDOr()}>
                                Ballon D'Or Winner!
                        </button>
                    </td>
                </tr>
            )
        })}
    </table>
  )
}

export default observer(Roster)