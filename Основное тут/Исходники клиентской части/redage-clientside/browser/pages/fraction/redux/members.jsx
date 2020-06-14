const 
MEMBERS_SET = 'MEMBERS_SET';

export default function members(state = [], action) {
  if (action.type === MEMBERS_SET) {
    var members = [];

    for(var i = 0; i <  action.payload.members.length; i++)
    {
        var member = action.payload.members[i];
        console.log(member)
        members.push({
            online: member[0],
            id: member[1],
            name: member[2],
            rank: member[3]
        });
    }
    return members;
  }
  return state;
}