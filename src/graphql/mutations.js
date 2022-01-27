/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createLines = /* GraphQL */ `
  mutation CreateLines(
    $input: CreateLinesInput!
    $condition: ModelLinesConditionInput
  ) {
    createLines(input: $input, condition: $condition) {
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
export const updateLines = /* GraphQL */ `
  mutation UpdateLines(
    $input: UpdateLinesInput!
    $condition: ModelLinesConditionInput
  ) {
    updateLines(input: $input, condition: $condition) {
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
export const deleteLines = /* GraphQL */ `
  mutation DeleteLines(
    $input: DeleteLinesInput!
    $condition: ModelLinesConditionInput
  ) {
    deleteLines(input: $input, condition: $condition) {
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
