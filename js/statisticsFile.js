var listOfStats;

function collectStats()
{
    listOfStats = "flax:700,wood:30,stone:50";
}

function getStats()
{
    return listOfStats;
}

function getStat(index)
{
    var stats = listOfStats.split(",");
    if(stats.length >= index + 1)
    {
        return stats[index];
    }
    return null;
}

function getInfo(index)
{
    if(getStat(index) != null)
        return getStat(index).split(":");
    return null;
}

function getName(index)
{
    if(getInfo(index) != null)
        return getInfo(index)[0];
    return null;
}

function getNumber(index)
{
    if(getInfo(index) != null)
        return getInfo(index)[1];
    return null;
}