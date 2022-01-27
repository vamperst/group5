/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      name
      location
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        location
        description
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLines = /* GraphQL */ `
  query GetLines($id: ID!) {
    getLines(id: $id) {
      RouteId
      ShortName
      IvrDescription
      Directions
      TextColor
      IsHeadwayMonitored
      DetourActiveMessageCount
      GoogleDescription
      Group
      SortOrder
      Stops
      IsHeadway
      RouteTraceHash64
      RouteRecordId
      RouteAbbreviation
      IsVisible
      Color
      IncludeInGoogle
      RouteTraceFilename
      RouteStops
      LongName
      Messages
      Vehicles {
        CommStatus
        Destination
        Heading
        LastStop
        OccupancyStatus
        DriverName
        DisplayStatus
        Latitude
        BlockFareboxId
        SeatingCapacity
        Direction
        TripId
        Name
        TotalCapacity
        LastUpdated
        RunId
        OccupancyStatusReportLabel
        Speed
        PropertyName
        StopId
        CurrentStatus
        VehicleId
        RouteId
        GPSStatus
        Longitude
        OnBoard
        OpStatus
        Deviation
        DirectionLong
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const listLines = /* GraphQL */ `
  query ListLines(
    $filter: ModelLinesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLines(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        RouteId
        ShortName
        IvrDescription
        Directions
        TextColor
        IsHeadwayMonitored
        DetourActiveMessageCount
        GoogleDescription
        Group
        SortOrder
        Stops
        IsHeadway
        RouteTraceHash64
        RouteRecordId
        RouteAbbreviation
        IsVisible
        Color
        IncludeInGoogle
        RouteTraceFilename
        RouteStops
        LongName
        Messages
        Vehicles {
          CommStatus
          Destination
          Heading
          LastStop
          OccupancyStatus
          DriverName
          DisplayStatus
          Latitude
          BlockFareboxId
          SeatingCapacity
          Direction
          TripId
          Name
          TotalCapacity
          LastUpdated
          RunId
          OccupancyStatusReportLabel
          Speed
          PropertyName
          StopId
          CurrentStatus
          VehicleId
          RouteId
          GPSStatus
          Longitude
          OnBoard
          OpStatus
          Deviation
          DirectionLong
        }
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
